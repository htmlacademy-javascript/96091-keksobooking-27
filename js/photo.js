
const avatarInput = document.querySelector('#avatar');
const avatar = document.querySelector('.ad-form-header__preview img');
const imageInput = document.querySelector('#images');
const imageContainer = document.querySelector('.ad-form__photo');
const DEAFAULT_AVATAR = 'img/muffin-grey.svg';

function resetPhoto() {
  avatar.src = DEAFAULT_AVATAR;
  imageContainer.innerHTML = '';
}

function isImage(file) {
  const FILE_TYPES = ['jpg', 'jpeg', 'png'];
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
}

function onChooseAvatar() {
  const avatarFile = avatarInput.files[0];

  if (isImage(avatarFile)) {
    avatar.src = URL.createObjectURL(avatarFile);
  }
}

avatarInput.addEventListener('change', onChooseAvatar);

function onChooseImage() {
  const imageFile = imageInput.files[0];

  if (isImage(imageFile)) {
    const image = document.createElement('img');
    image.style.width = '100%';
    image.style.height = 'auto';
    image.src = URL.createObjectURL(imageFile);
    imageContainer.innerHTML = '';
    imageContainer.append(image);
  }
}

imageInput.addEventListener('change', onChooseImage);

export {resetPhoto};
