import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as styled from "./style";
import {Button, Content, Description, Label, Title} from 'components';
import { useHistory } from "react-router-dom";
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
    <>
      <styled.CreateChat>
        <Title
          text={'새로운 끼룩챗 만들기'}
          color={'#2b2b2b'}
          marginTop={128}
          fontSize={26}
        />
        <Content
          text={'가족들과 대화를 나눌 끼룩챗을 만들어보세요.'}
          margin={'12px 0 48px'}
          fontSize={15}
        />

        <Label
          text={'채팅방의 이름은 무엇인가요?'}
        />
        <Description
          text={'(최대 12자까지 가능)'}
          marginLeft={4}
        />
        <styled.NameInput
          value={chatName}
          onChange={e => setChatName(e.currentTarget.value)}
          error={chatName.length === 0}
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

        <styled.Wrapper>
          <Label
            text={'채팅방의 대표 사진을 선택해주세요.'}
          />
          <Description
            text={'( jpg, png 업로드만 가능합니다. )'}
            marginLeft={4}
          />
        </styled.Wrapper>

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
                  이미지 선택하기
                </styled.Upload>
              </styled.Image>
              : null
            : <>
              <styled.ImageBox
                error={!imgFile}
              >
              {/*  <styled.ImageBoxText>*/}
              {/*    설정하고 싶은 이미지를<br />*/}
              {/*    여기에 끌어다 놓아주세요.*/}
              {/*</styled.ImageBoxText>*/}
              {/*  <styled.Or>- OR -</styled.Or>*/}

                <styled.FileInput
                  type="file"
                  id="file"
                  onChange={handleChange}
                />
                <styled.Upload
                  margin={217}
                  onClick={() => handleClick()}
                >
                  이미지 선택하기
              </styled.Upload>
              </styled.ImageBox>
              <styled.Error>
                사진을 등록해주세요.
              </styled.Error>
            </>
        }
      </styled.CreateChat>
      <Button
        text={'끼룩챗 시작하기'}
        disabled={!startBtn}
        bold={true}
        height={51}
        width={185}
        margin={'64px 0 205px'}
        color={'white'}
        background={startBtn ? '#5057ef' : '#bdbdbd'}
        cursor={startBtn ? 'pointer' : 'initial'}
        borderRadius={30}
        onClick={() => fileUpload()}
      />
    </>
  );
};

export default CreateChat;
