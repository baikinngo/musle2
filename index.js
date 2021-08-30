
'use strict';

{
    // 各々の変数定義
    let loc = 0;
    let word;
    const words = [];
    let proverb;
    const ja = [];
    let startTime;
    let isPlaying = false;
    let miss = 0;
    let wordLength = 0;
    let count = 3;
    
  

    // タイピングする文字列表示のための関数
    function setWord() {
        // ランダムにしたい↓
        // word = words.splice(Math.floor(Math.random() * words.length),1)[0];
        // proverb = ja.splice(Math.floor(Math.random() * ja.length),1)[0];
        word = words.splice(0, 1)[0];
        proverb = ja.splice(0, 1)[0];
        wordLength += word.length;
        title.textContent = word;
        result.textContent = proverb;
        timer.textContent=null;
        sto.textContent=null;
        loc = 0;
    }

    let countdown = function(){
        
        document.getElementById('timer').textContent = count.toString();
        let id = setTimeout(countdown, 1000);
        if(count < 0){
          clearTimeout(id);
          timer.textContent="スタート！";
       
        }
       
        }

    function startGame() {
        document.addEventListener('keypress', (e) => {
          //エンターでスタート
            if(e.keyCode===32){ 
               // 開始後のクリックを無効化
            if (isPlaying === true) {
                return;
            }
        　  strat.textContent=null;
            taiping.textContent=null;
            title.textContent = null;
            result.textContent = "READY?";
            retry.textContent = null;
            sto.textContent=null;
            setTimeout(() => {
                result.textContent = "GO！！！！";
            },1000);
            setTimeout(() => {
                // 各変数の初期化
                wordLength = 0;
                miss = 0;
                isPlaying = true;
                startTime = Date.now();
                // 配列要素の作成・挿入
                words.splice(0, 0,
                    'daikyoukinn',
                    'daitaisitoukinn',
                    'jouwannnitoukinn',
                    'jouwannsanntoukinn',
                    'hukutyokukinn',
                    'zenkyokinn',
                    'souboukinn',
                    'kouhaikinn',
                    'sannkakukinn',
                    'daiennkinn',
                    'jouwannkinn',
                    'daidennkinn',
                    'zennwannkutukinngunn',
                    'tyouhaikinn',
                    'tyouyoukinngunn',
                    'hiramekinn',
                    'miyaohutosi',
                    'tikubi');
                  
                  
                  
                  
                  
                  
                    ja.splice(0, 0,
                        '大胸筋',
                        '大腿四頭筋',
                        '上腕二頭筋',
                        '上腕三頭筋',
                        '腹直筋',
                        '前鋸筋',
                        '僧帽筋',
                        '広背筋',
                        '三角筋',
                        '大円筋',
                        '上腕筋',
                        '大臀筋',
                        '前腕屈筋群',
                        '長背筋',
                        '腸腰筋群',
                        'ヒラメ筋',
                        'みやおふとし',
                        '乳首',
                        );
                        setWord();
                    }, 2000);
                    
                }})}
            
                // document.addEventListener('click', () => {
          
            
                //     countdown();
                // });
    
                const title = document.getElementById('title');
                const result = document.getElementById('result');
                const retry  = document.getElementById('retry');
                const taiping  = document.getElementById('taiping');
                const strat = document.getElementById('start');
                const timer =document.getElementById('timer');
                const owari =document.getElementById('owari');
                const sto =document.getElementById('sto');
            
            startGame();
            
            // キーボードにて入力された内容を反映するための設定
            document.addEventListener('keydown', e => {
                if (e.key !== word[loc]) {
                    // ミスタイプの計算
                    miss++;
            return;
        }
        loc++;
        // 入力した文字は'_'で表示
        title.textContent = '_'.repeat(loc) + word.substring(loc);
        
        // 文字列の入力が完了したら次に移行
        if (loc === word.length) {
            // 全て入力が完了したら結果表示
            if (words.length === 0) {
                title.textContent=null;
                result.textContent = null;
          owari.textContent="オールアウトォ！！";
        kekka(); 
        };
          /////////今日はここから//////////////
          function kekka(){  setTimeout(() => {
              // かかった時間の計算
              owari.textContent=null;
              const finishTime = ((Date.now() - startTime) / 1000).toFixed(2);
              isPlaying = false;
              // 正答率の計算
              const percent = Math.floor(wordLength / (wordLength + miss) * 10000) / 100;
            
              result.textContent = null;
              title.textContent = ` 時間${finishTime} 秒 　ミス数:${miss}個   正解率:${percent}％`;
              retry.textContent = 'ダブルスプリットするにはスペースキーを押せ！！';
              // 配列を空要素化
              words = [];
              ja = [];
              // クリックしたら再度できるように設定
              startGame();
              return;
            }, 3000)}
            setWord();
        }
    }
            )};


            
