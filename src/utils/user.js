export function getUserInfo() {
    return JSON.parse(localStorage.getItem('userinfo'));
}

export function removeUserInfo() {
    JSON.parse(localStorage.removeItem('userinfo'));
}

export function setUser(info) {
    localStorage.setItem('userinfo', JSON.stringify(info));
}