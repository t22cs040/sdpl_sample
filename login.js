document.getElementById("login-button").addEventListener("click", login)
document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        login();
    }
})

/*
 * テスト用の辞書
 * おそらくここはデータベースとかになる
 * (暗号化されないコードとしてユーザ名、パスワードの組み合わせを残すのは危険すぎる)
*/
const dictionary = {
    a: "a",
    userA: "PasswordA"
}

// 管理者用の辞書
const adminDict = {
    admin: "password"
}

function login() {
    /* 
     * ユーザ名とパスワードが一致しているか判定し
     * 一致していたら画面を遷移させる
     * テストとして、上記辞書の組み合わせのときに
     * ログインに成功するように設定する
    */
    const inputUserName = document.getElementById('user-name').value;
    const inputPassword = document.getElementById('password').value;

    if (adminDict[inputUserName] === inputPassword) {
        window.location.href = "./admin_top.html";
    } else if (dictionary[inputUserName] === inputPassword) {
        window.location.href = "./top.html";
    } else {
        document.getElementById('errMessage').innerText = "ログインに失敗しました。もう一度お試しください。";
    }
}