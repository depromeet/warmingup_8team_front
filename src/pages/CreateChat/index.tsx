import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as styled from "./style";
import { Button } from 'components';
import { useHistory } from "react-router-dom";
import buttonFileUpload from '../../img/button-fileupload.svg';
import { RootState } from 'store/reducers/interface';
import { updateChatroom } from 'store/reducers/user';
import { axios } from 'utils';
import FormData from 'form-data'

const CreateChat: React.FC = _ => {
  const chatroom = useSelector((state: RootState) => state.user.chatroom);
  const [chatName, setChatName] = useState('');
  const [imgFile, setImgFile] = useState<{ file: File, imagePreviewUrl: string | ArrayBuffer | null } | null>(null);
  const [startBtn, setStartBtn] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (chatName && chatName.length <= 12 && imgFile) {
      setStartBtn(true);
      return;
    }
    setStartBtn(false);
  }, [chatName, imgFile]);

  const handleClick = () => {
    const fileInput: any = window.document.getElementById('file');
    fileInput.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        setImgFile({
          file: file,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const fileUpload = async () => {
    let form = new FormData();
    if (imgFile && chatName) {
      form.append('thumbnail', imgFile.file);
      form.append('name', chatName);
    }
    const res = await axios.post(`/chatroom/${chatroom.url}`, form)
    const { data } = res;

    if (data) {
      dispatch(updateChatroom(data));
      history.push('/create-chat-complete');
    }
  };

  return (
    <div>
      <styled.CreateChat>
        <styled.H1>
          새로운 채팅방 생성하기
        </styled.H1>
        <styled.Description>
          가족, 친척들과 함께 이야기할 새로운 채팅방을 만들어보세요!
        </styled.Description>

        <styled.H2>
          채팅방의 이름은 무엇인가요?
          <styled.Span>
            ( jpg, png 업로드만 가능합니다. )
          </styled.Span>
        </styled.H2>
        <styled.NameInput
          value={chatName}
          onChange={e => setChatName(e.currentTarget.value)}
        />
        {
          chatName.length === 0 ?
            <styled.Error>
              채팅방 이름을 입력해주세요.
            </styled.Error>
            : chatName.length > 12 ?
              <styled.Error>
                글자 수가 초과되었습니다. 최대 12자까지 가능합니다.
            </styled.Error>
              : null
        }

        <div>
          <styled.H2>
            채팅방의 대표 사진을 선택해주세요.
            <styled.Span>
              ( jpg, png 업로드만 가능합니다. )
            </styled.Span>
          </styled.H2>
        </div>

        {
          imgFile ?
            typeof imgFile.imagePreviewUrl === 'string' && imgFile.imagePreviewUrl ?
              <styled.Image
                backgroundImage={imgFile.imagePreviewUrl}
              >
                <styled.FileInput
                  type="file"
                  id="file"
                  onChange={handleChange}
                />
                <styled.Upload
                  margin={241}
                  onClick={() => handleClick()}
                >
                  직접 업로드하기
              </styled.Upload>
              </styled.Image>
              : null
            : <>
              <styled.ImageBox>
                <styled.ImageBoxText>
                  채팅방에 설정하고 싶은 이미지를<br />
                  여기에 끌어다 놓아주세요:)
              </styled.ImageBoxText>
                <styled.Or>또는</styled.Or>

                <styled.FileInput
                  type="file"
                  id="file"
                  onChange={handleChange}
                />
                <styled.Upload
                  onClick={() => handleClick()}
                >
                  직접 업로드하기
              </styled.Upload>
              </styled.ImageBox>
              <styled.Error>
                채팅방 대표 사진을 선택해주세요.
              </styled.Error>
            </>
        }

        <Button
          disabled={!startBtn}
          bold={true}
          height={68}
          width={236}
          margin={'67px'}
          text={'끼룩챗 시작하기'}
          color={startBtn ? 'white' : '#5057ef'}
          background={startBtn ? '#5057ef' : 'white'}
          cursor={startBtn ? 'pointer' : 'initial'}
          onClick={() => fileUpload()}
          borderRadius={34}
        />
      </styled.CreateChat>
    </div>
  );
};

export default CreateChat;
