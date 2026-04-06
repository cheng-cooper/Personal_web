Vue.createApp({
    data() {
        return {
            role_index:-1,
            role:[
                {
                    sever_name:"無名小鎮3.0",
                    sever_img:"https://meee.com.tw/nNzFlVA.png",
                    arrival_time:"2025/10/12",
                    name:"凱爾·格倫",
                    avatar:['https://meee.com.tw/1TOXBJb.png','https://meee.com.tw/fi712Ds.png','https://meee.com.tw/XdnyFYS.png'],
                    birthday:"2007/04/06",
                    citizenship:"美國",
                    blood_type:"O",
                    background_story:"我叫凱爾，我的成長過程一直很溫暖。父母不僅照顧我的生活，更尊重我的每一個想法。從小，父母就鼓勵我多嘗試、多探索，他們常說：「世界很大，別把自己困在小地方。」在這樣的環境中，我養成了勇於冒險、敢於追求未知的性格，也慢慢萌生了想出國看看其他人、事、物的念頭。在我18歲這年，我終於向父母說出了心裡一直藏著的想法：「我想去其他國家、其他地方看看，體驗不同的文化，遇見不同的人。」父母雖然不捨，但仍選擇尊重我的決定，微笑著對我說：「勇敢去做自己想做的事吧。不管旅程長短，不管遇到多少挑戰，如果累了、想休息了，就回來。這個家永遠是你的避風港。」於是，我帶著父母給的祝福與自己的一點積蓄，踏上了人生的旅程。初次離開熟悉的家鄉，心中既有些許害怕，也充滿了興奮與好奇。我希望在旅途中認識更多朋友、學會更多技能，也想把所見所聞分享給我的家人和朋友們。",
                    job:"警察",
                    end_time:"未完結"
                },
                {
                    sever_name:"ZeroOne2.0",
                    sever_img:"https://meee.com.tw/EvFXrnp.png",
                    arrival_time:"2026/03/06",
                    name:"凱爾·格倫",
                    avatar:['https://meee.com.tw/qGFYAF9.png'],
                    birthday:"2005/04/06",
                    citizenship:"美國",
                    blood_type:"O",
                    background_story:"凱爾成長於一個充滿愛與尊重的家庭，父母的開明塑造了他勇敢探索且正直的性格。然而，2023 年全球金融風暴爆發時，18歲的他正值踏入社會的關鍵期。原本安穩的未來隨著經濟崩潰而瓦解，他在外界動盪的兩年裡，被迫在物資匱乏與社會秩序瓦解的邊緣掙扎求生。然而，凱爾始終堅守著家庭帶給他的教誨，即便在最困苦的時刻，他仍保持著他心中的正義。這兩年的磨難沒有摧毀他的善良，反而讓他具備了超越年齡的沉穩與對環境的敏銳洞察力。",                    job:"警察",
                    end_time:"未完結"
                },
                // {
                //     sever_name:"",
                //     sever_img:"",
                //     arrival_time:"",
                //     name:"",
                //     avatar:[],
                //     birthday:"",
                //     citizenship:"",
                //     blood_type:"",
                //     background_story:"",
                //     job:"",
                //     end_time:""
                // },
            ]
        }
    },
    methods: {
    
    },
    computed:{

    }
}).mount("#app")

// 動畫 偵測
// const observer = new IntersectionObserver(elements => {
//     elements.forEach(element => {
//         if (element.isIntersecting) {
//             $(element.target).addClass('show')
//         } else {
//             $(element.target).removeClass('show')
//         }
//     })
// })
// $('.hide').get().forEach(element=>{
//     observer.observe(element)
// })