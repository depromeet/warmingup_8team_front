import React, {useEffect, useState} from 'react';
import * as styled from "./style";
import {Button, Header} from 'components';
import { useHistory } from "react-router-dom";

const CreateChat:React.FC = _ => {
  const [chatName, setChatName] = useState('');
  const [imgFile, setImgFile] = useState<{file:File,imagePreviewUrl: string | ArrayBuffer | null} | null>(null);
  const [startBtn, setStartBtn] = useState(false);
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

  const fileUpload = () => {
    // TODO 서버로 새로운 끼룩 챗 정보 보내기
    // chatName, imgFile, userInfo
    history.push("/chat");
  };

  return (
    <div>
      <Header/>
      <styled.CreateChat>
        <styled.H1>
          새로운 끼룩 챗 생성하기
        </styled.H1>
        <styled.Description>
          유소년에게서 위하여 그들은 인류의 이상, 것이다. 뛰노는 동력은 무엇이 약동하다.
        </styled.Description>

        <styled.H2>
          채팅방의 이름은 무엇인가요?
        </styled.H2>
        <styled.NameInput
          value={chatName}
          onChange={e => setChatName(e.currentTarget.value)}
        />
        {(chatName.length > 12) ?
          (<styled.Error>
            글자 수가 초과되었습니다. 최대 12자까지 가능합니다.
          </styled.Error>)
         : null}

        <div>
          <styled.H2>
            2. 아이콘 설정
            <styled.IconDescription>
              ( jpg, png 업로드만 가능합니다. )
            </styled.IconDescription>
          </styled.H2>
        </div>

        {
          imgFile
            ? typeof imgFile.imagePreviewUrl === 'string' && imgFile.imagePreviewUrl
            ? <styled.Image
                backgroundImage={imgFile.imagePreviewUrl}
              >
              <styled.FileInput
                type="file"
                id="file"
                onChange={handleChange}
              />
              <Button
                height={48}
                width={126}
                text={"파일 업로드"}
                margin={"241px"}
                onClick={()=>handleClick()}
              />
            </styled.Image>
          : null
          : <styled.ImageBox>
            <styled.IconBoxDescription>
              채팅방에 설정하고 싶은 이미지를<br/>
              여기에 끌어다 놓아주세요:)
            </styled.IconBoxDescription>
            <styled.Or>or</styled.Or>

            <styled.FileInput
              type="file"
              id="file"
              onChange={handleChange}
            />
            <Button
              height={48}
              width={126}
              text={"파일 업로드"}
              onClick={()=>handleClick()}
            />
          </styled.ImageBox>
        }

        <Button
          disabled={!startBtn}
          bold={true}
          height={56}
          width={155}
          margin={'67px'}
          text={'끼룩챗 시작하기'}
          color={startBtn ? 'white' : 'black'}
          background={startBtn ? '#4a4a4a' : 'white'}
          cursor={startBtn ? 'pointer' : 'initial'}
          onClick={()=>fileUpload()}
        />
      </styled.CreateChat>
    </div>
  );
};

export default CreateChat;
