// HTML上の要素を取得
const textInput = document.getElementById('text-input');
const countDisplay = document.getElementById('count');

// 入力されるたびに実行されるイベント
textInput.addEventListener('input', () => {
    // 入力された文字の長さを取得して表示を更新
    const length = textInput.value.length;
    countDisplay.textContent = length;
});