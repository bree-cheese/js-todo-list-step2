import UserApi from '../api/user.js';

async function App() {
  const onUserCreateHandler = () => {
    const userName = prompt('추가하고 싶은 이름을 입력해주세요.');
  };

  const userCreateButton = document.querySelector('.user-create-button');
  userCreateButton.addEventListener('click', onUserCreateHandler);
  let data = await UserApi.getUserList();
  console.log(data);
}

App();
