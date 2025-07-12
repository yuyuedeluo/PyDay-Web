<script>
export default {
  order: 1,
  title: 'LLM 學習筆記',
  description: 'Chapter 01：Transformer'
}
</script>

<template>
  <div>
    <h1>LLM 學習筆記｜Chapter 01：Transformer</h1>
    <p>
      在這個充滿智慧型應用的時代，大型語言模型LLM（Large Language Model）正逐漸成為改變世界的重要技術。從 ChatGPT 到各種 AI 輔助工具，它們的背後多半都是基於同一個核心架構：Transformer。
      <br>
      這份筆記，是我踏上 LLM 學習之路的第一步。與其一開始就陷入龐大的模型與公式堆中，我選擇從 Transformer 開始，理解它的構造、它如何處理語言、如何透過 Attention 將一連串文字轉化為能被模型「理解」的表示。
      <br>
      Transformer 不只是技術堆疊，它代表了一種思想：讓模型學會「注意」哪些資訊是重要的，進而學會如何產生語言。
      <br>
      接下來，我會從最基本的 Transformer 架構、Self-Attention 機制開始，一步步探索它的運作原理，打好進入 LLM 世界的基礎。<br>
    </p>

    <h2 style="color: #aaa;">◉Transformer 模型總覽</h2>
    <h1>一、Transformer 的核心價值</h1>
    <p>
      Transformer 是一種以 Attention 為基礎的架構，特別在序列到序列（Seq2Seq）任務，如機器翻譯上表現出色。<br>
      相比傳統 RNN 架構（如 Google Neural Machine Translation），Transformer 具有：<br>
      ．並行化運算（去除時間步驟依賴）<br>
      ．精度提升（Attention 可以更精準地抓取語意關聯）<br>
      ．可擴展性強（適合在 Cloud TPU 上訓練）<br>
      <br>
      我們以一個簡單的例子來理解 Transformer 的核心價值。<br>
      假設我們有一個句子：「The animal didn’t cross the street because it was too tired」。<br>
      在這個句子中，「it」指的是「animal」，而不是「street」。<br>
      傳統的 RNN 模型可能會因為時間步驟的限制，無法有效捕捉這種長距離依賴關係。<br>
      而 Transformer 的 Self-Attention 機制，則能讓模型在處理「it」時，同時考慮到整個句子中的其他詞，從而正確理解「it」所指的對象。<br>
    </p>
    
    <br>
    <h2 style="color: #aaa;">◉Macro View 模型結構總覽</h2>
    <h1>二、整體結構</h1>
    <p>
      Transformer 包含兩大部分：<br>
      ．Encoder 編碼器堆疊<br>
      ．Decoder 解碼器堆疊<br>
      編碼組件是由多個編碼器（encoder）堆疊而來，解碼組件也是由相同個數的解碼器堆疊而來。<br>
      讓我們以一個翻譯任務為例：<br>
    </p>
    
    <img
      src="https://wld-blog-imgs.oss-cn-shanghai.aliyuncs.com/blogimg-master/The_transformer_encoder_decoder_stack.png"
      alt="Transformer Structure"
      width="400"
    >
    <p>
      每個編碼器與解碼器彼此不共享權重，但結構一致。<br>
    </p>
    <br>
    <h1>三、資料流簡介</h1>
    <p>
      輸入句子 → Embedding（單詞轉向量）<br>
      向量 → Encoder Stack 處理<br>
      Encoder 輸出 → 作為 Decoder 的 Attention 輸入<br>
      Decoder 處理後 → 輸出為目標句子（例如翻譯）<br>
    </p>
    <img
      src="https://jalammar.github.io/images/t/The_transformer_encoders_decoders.png"
      alt="Transformer Structure"
      width="400"
    >
    <br>
    <br>
    <h2 style="color: #aaa;">◉Encoder 的組成細節</h2>
    <h1>四、每層 Encoder 結構</h1>
    <p>
      每層 Encoder 包含兩個子層：<br>
      ．Self-Attention<br>
      ．Feed Forward Neural Network（FFNN）<br>
      <img
      src="https://jalammar.github.io/images/t/Transformer_encoder.png"
      alt="Transformer Structure"
      width="400"
    >
      <br>
      每個單詞的向量都個別進行處理：<br>
      在 Self-Attention 中，各詞之間相互依賴<br>
      在 FFNN 中，每詞獨立處理 → 可並行運算<br>
    </p>
    

    <br>
    <h2 style="color: #aaa;">◉Decoder 的組成細節</h2>
    <h1>五、每層 Decoder 結構</h1>
    <p>
      每層 Decoder 包含三個子層：<br>
      ．Self-Attention（阻止未來詞影響現在）<br>
      ．Encoder-Decoder Attention（關注來源句子）<br>
      ．Feed Forward （與 Encoder 相同）<br>
    </p>
    <img
      src="https://jalammar.github.io/images/t/Transformer_decoder.png"
      alt="Transformer Structure"
      width="400"
    >
    <br>
    <br>
    <h2 style="color: #aaa;">◉Self-Attention</h2>
    <h1>六、作用與目標</h1>
    <p>
      讓模型在處理某個詞時，能夠「關注」輸入序列中其他與其語意相關的詞。<br>
      範例：「The animal didn’t cross the street because it was too tired」<br>
      “it” 應該關注 “animal” → 表達正確的語意<br>
      在之後的處理中，模型會學會如何將 “it” 與 “animal” 連結起來。<br>
      這也會是下一篇貼文的主題。<br>
      <br>
      學習資料參考:<br>
      <a href="https://jalammar.github.io/illustrated-transformer/" target="_blank">The Illustrated Transformer</a><br>
      <a href="https://wanglindong.com/2021/05/14/illustrated_transformer/" target="_blank">The Illustrated Transformer | Jay Alammar | Wang's Space</a>
    </p>
  </div>
</template>

<style scoped>  
div {
  color: #fff;
}
</style>