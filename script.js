// MAIN PAGE
const mainButtons = [...document.querySelectorAll('.btn_main')];
const sectArr = [...document.getElementsByTagName('section')]

console.log(mainButtons);


function hide(el) {
    el.style.display = 'none'
}

function show(el) {
    el.style.display = 'block'
}

function soundSuccess(name) {
    const soundTrue = document.createElement('audio')
    soundTrue.classList.add('audio')
    soundTrue.src = `./src/audio/${name}.mp3`
    soundTrue.play()
}

function chooseSection(arr, target) {
    arr.forEach(section => {
        hide(section)
        if(section.id === target) {
            show(section)
            soundSuccess('button')
        }
    })
}

mainButtons.forEach(item => {
    item.addEventListener('click', (event) => {
        let target = event.target.getAttribute('data')
        
        switch (target) {
            case 'quiz_section':
                chooseSection(sectArr, target)
                break;
            case 'dance_section': 
                chooseSection(sectArr, target)
                break;
            case 'main_section': 
                chooseSection(sectArr, target)
                break;
            case 'song_section': 
                chooseSection(sectArr, target)
                break;
            case 'dance_section2': 
                chooseSection(sectArr, target)
                break;
            default:
                break;          
        }
        
    })
})

// MODAL_QUIZ

const questions = [
    {
        id: '1t100',
        text: 'Назвіть гру за звуком',
        audio: true,
        audioPath: './src/audio/cs_click.mp3',
        answer: 'COUNTER-STRIKE'
    },
    {
        id: '1t200',
        text: 'Назвіть гру за саундтреком',
        audio: true,
        audioPath: './src/audio/nfs.mp3',
        answer: 'Need For Speed: Underground'
    },
    {
        id: '1t300',
        text: 'Назвіть гру за звуком',
        audio: true,
        audioPath: './src/audio/gta.mp3',
        answer: 'GTA-VICE CITY'
    },
    {
        id: '1t400',
        text: 'Яка компанія розробляла серію ігр FIFA у 2000-х роках?',
        audio: false,
        answer: 'EA Sports'
    },
    {
        id: '1t500',
        text: 'В якому році вийшла перша частина легендарної гри Mafia?',
        audio: false,
        answer: '2002'
    },
    {
        id: '2t100',
        text: 'В якому році вийшла перша версія iPhone?',
        audio: false,
        answer: '2007'
    },
    {
        id: '2t200',
        text: 'Яка соціальна мережа дозволяла користувачам ділитись повідомленнями до 140 символів?',
        audio: false,
        answer: 'Twitter'
    },
    {
        id: '2t300',
        text: 'Яка ігрова консоль була найбільш продаваємою в 2000-х',
        audio: false,
        answer: 'SONY PlayStation 2'
    },
    {
        id: '2t400',
        text: 'Який бренд телефонів класу люкс, створений у 2000-х роках як підрозділ NOKIA, став відомим завдяки дорогим матеріалам',
        audio: false,
        answer: 'VERTU'
    },
    {
        id: '2t500',
        text: 'Яка компанія випустила перший смартфон на Android в 2008 році?',
        audio: false,
        answer: 'HTC - High tech computer'
    },
    {
        id: '3t100',
        text: 'Який канал транслював шоу "Танці з зірками"?',
        audio: false,
        answer: '1 + 1'
    },
    {
        id: '3t200',
        text: 'Назвіть шоу за саундтреком',
        audio: true,
        audioPath: './src/audio/loto.mp3',
        answer: 'ЛОТО-ЗАБАВА'
    },
    {
        id: '3t300',
        text: 'Назвіть шоу за саундтреком',
        audio: true,
        audioPath: './src/audio/lg.mp3',
        answer: 'LG-ЕВРІКА'
    },
    {
        id: '3t400',
        text: 'В 2005 році на шоу "Перший мільйон" він відповів на всі 15 питань і виграв 1 000 000 грн. Назвіть його',
        audio: false,
        answer: 'Святослав Вакарчук'
    },
    {
        id: '3t500',
        text: 'Назвіть шоу за саундтреком',
        audio: true,
        audioPath: './src/audio/patr.mp3',
        answer: 'ІГРИ ПАТРІОТІВ'
    },
    {
        id: '4t100',
        text: 'Хто зняв фільм "Матриця. Перезавантаження"?',
        audio: false,
        answer: 'Сестри Вачовскі'
    },
    {
        id: '4t200',
        text: 'Назвіть популярний український ситком про двох закоханих, які жили в одному будинку?',
        audio: false,
        answer: 'ЛЕСЯ + РОМА'
    },
    {
        id: '4t300',
        text: 'В 2009 році цей фільм став найкасовішим фільмом на момент його виходу. Назвіть цей фільм.',
        audio: false,
        answer: 'АВАТАР'
    },
    {
        id: '4t400',
        text: 'В 2004 році на телеканалі NBC вийшов фінальний епізод цього культового ситкому. Про який серіал йде мова?',
        audio: false,
        answer: 'FRIENDS'
    },
    {
        id: '4t500',
        text: 'Хто любить оранжад? _____ любить оранжад!',
        audio: false,
        answer: 'Келл. Повторювана фраза із молодіжного серіалу "Кенан і кел", що виходив на телеканалі ICTV'
    },
    {
        id: '5t100',
        text: 'Яку картку отримав Zinedin Zidane 09.07.2006?',
        audio: false,
        answer: 'Червону картку'
    },
    {
        id: '5t200',
        text: 'Яку поп-зірку 2000-х років називали "принцесою поп-музики"?',
        audio: false,
        answer: 'Брітні Спірс'
    },
    {
        id: '5t300',
        text: 'До якої стадії дійшла збірна України з футболу на ЧС-2006 року?',
        audio: false,
        answer: 'Чвертьфінал (1/4)'
    },
    {
        id: '5t400',
        text: 'Яку назву мав український музичний фестиваль, який проводився з 1992 до 2008 року. Місце проведення м. Каховка',
        audio: false,
        answer: 'Таврійські ігри'
    },
    {
        id: '5t500',
        text: "Назвіть ім'я боксера, який 8 березня 2003 року брутально нокаутував Володимира Кличка?",
        audio: false,
        answer: 'Коррі Сандерс'
    }
]

const spanquiz = [...document.querySelectorAll('.span')]
const quizmodal = document.querySelector('.quiz_modal_wrapper')
const closebtn = document.querySelector('.close')

closebtn.addEventListener('click', () => {
    quizmodal.style.display = 'none'
})

spanquiz.forEach(span => {
    span.addEventListener('click', (e) => {
        let target = e.target.id

        questions.forEach(item => {
            if(target === item.id) {
                quizmodal.style.display = 'block'
                const text = quizmodal.querySelector('.question')
                text.textContent = item.text
                if(item.audio) {
                    const audio = quizmodal.querySelector('.audio')
                    audio.src = item.audioPath
                    audio.controls = true
                } else {
                    const audio = quizmodal.querySelector('.audio')
                    audio.src = ''
                    audio.controls = false
                }
                const button = quizmodal.querySelector('.answer')
                button.addEventListener('click', () => {
                text.textContent = item.answer
                span.style.opacity = '0.6'
                })
            }

        })
        
    })
    
})

const inputs = document.querySelectorAll('.danceInput')
const danceFormBtn = document.querySelector('.danceModalBtn')
const danceModal = document.querySelector('.dance_modal_window')
const formDance = document.querySelector('.input_wrapper')
const teamName1 = document.querySelector('.name_team1')
const teamName2 = document.querySelector('.name_team2')
const reloadBtn = document.querySelector('.danceReload')
const closeModalDance = document.querySelector('.closeDanceModal')
const danceSection = document.querySelector('.dance_section')

formDance.addEventListener('submit', (event) => {
event.preventDefault()
inputs.forEach(input => {
    if(input.name === 'team1') teamName1.textContent = input.value
    if(input.name === 'team2') teamName2.textContent = input.value
    })
formDance.reset()
danceModal.style.display = 'none'
})

closeModalDance.addEventListener('click', () => {
    danceModal.style.display = 'none'
})

reloadBtn.addEventListener('click', () => {
    teamName1.textContent = ''
    teamName2.textContent = ''
    clearSvg()
    whiteDance()
    danceModal.style.display = 'block'
})

const cells = document.querySelectorAll('.cell')

cells.forEach(item => {
    item.setAttribute('data-text', item.textContent)
    item.addEventListener('click', () => {
        if(item.getAttribute('data-ship') === '22') {
            let name = 'fire'
            getSvg(name, item)
            soundSuccess('goal')
        }
        if(!item.hasAttribute('data-ship')) {
            let name = 'sadFace'
            getSvg(name, item)
            soundSuccess('fail')
        }
    })

})

async function getSvg(svgName, parent) {
        try {
          const response = await fetch(`./src/icons/${svgName}.svg`)
          if(!response.ok) {
            throw new Error(`Error loading SVG`)
          }  
        let svgContent = await response.text()
          parent.innerHTML = svgContent
        } catch (error) {
            console.log(error);
    }
}

function clearSvg() {
    cells.forEach(item => {
        const svg = item.querySelector('svg')
        if(svg) svg.remove()
        const originText = item.getAttribute('data-text')
        item.textContent = originText
    })
}

const buttontest = document.querySelector('.test1')
const audios = [...document.querySelectorAll('.audio')]
const danceButtons = [...document.querySelectorAll('.choosenDance')]
const closeVideoBtn = document.querySelector('.closeVideo')
const btns = document.querySelectorAll('.choosenDance')

danceButtons.forEach(item => {
    item.addEventListener('click', () => {
        // showVideo(item.id)
        const iframe = item.querySelector('iframe')
        iframe.style.display = 'block'
        closeVideoBtn.style.display = 'block'
        closeVideoBtn.addEventListener('click', () => {
            iframe.style.display = 'none'
            greyTextDance(iframe.title)
            closeVideoBtn.style.display = 'none'
            })
    })
})


const testbtn = document.querySelector('.test')

// SONG CODE

const closeSongModalBtn = document.querySelector('.closeSongModal')
const songModalWindow = document.querySelector('.song_modal_window')
const songItem = [...document.querySelectorAll('.song_item')]
const songsDiv = document.querySelector('.song_modal_container')
const confirmDoneButton = document.querySelector('.ok_btn')
let currentIndex = null

const songs = [
    ['ПАДАЙ', 'ЗІ', 'МНОЮ', 'В', 'КУЛЬБАБИ'],
    ['СТАРІ', 'ФОТОГРАФІЇ', 'НА', 'СТІЛ', 'РОЗКЛАДИ'],
    ['ВЕСНА', 'ВЕСНА', 'ВЕСНА', 'ВЕСНА', 'ПРИЙДЕ'],
    ['СМАРАГДОВЕ', 'НЕБО', 'ЧЕКАЄ', 'НАС', 'ЗАВТРА'],
    ['дельфінах', 'я', 'до', 'тебе', 'доберусь'],
    ['Я', 'під', 'лавою', 'тебе', 'знайду'],
    ['Всі', 'твої', 'драми', 'парусами', 'Несуть'],
    ['Бо', 'тебе', 'кохає', 'Фантастична', 'жінка'],
    ['Я', 'не', 'здамся', 'без', 'бою'],
    ['Літають', 'над', 'дахом', 'сталеві', 'птахи'],
    ['У', 'садибі', 'на', 'осонні', 'Три',]
]

function openSongModal(index) {
    currentIndex = index
    songsDiv.innerHTML = ''
    songs[index].forEach(song => {
        const div = document.createElement('div')
        // div.className = 'button-28';
        div.classList.add('button-28')
        div.textContent = ''
        div.addEventListener('pointerdown', () => {
            div.textContent = song.toUpperCase()
            // div.classList.add('button-28')
        })
        songsDiv.append(div)
    })
    songModalWindow.style.display = 'flex'
}

function finishGuess() {
    console.log('start');
    
    songModalWindow.style.display = 'none';
    if (currentIndex !== null) {
        console.log(songItem[currentIndex]);
        
      songItem[currentIndex].disabled = true;
      songItem[currentIndex].style.background = 'gray';
    //   songItem[currentIndex].disabled = true;
        
    }
  }

  confirmDoneButton.addEventListener('pointerdown', () => {
    finishGuess()
})

songItem.forEach((item, index) => {
    item.addEventListener('pointerdown', () => openSongModal(index))
})

closeSongModalBtn.addEventListener('click', () => {
        songModalWindow.style.display = 'none'
})


// testbtn.addEventListener('click', (event) => {

// })

// function showVideo(id) {
//     const videoEl = document.createElement('video')
//     videoEl.src = `./src/video/${id}.mp4`
//     videoEl.controls = true
//     videoEl.classList.add('videoDance')
//     danceSection.append(videoEl)
//     closeVideoBtn.style.display = 'block'

    // closeVideoBtn.addEventListener('click', () => {
    // iframe.style.display = 'none'
    // // greyTextDance(id)
    // closeVideoBtn.style.display = 'none'
    // })
// }

// function showVideo(id) {
//     // const videoEl = document.createElement('iframe')
//     // videoEl.src = `https://www.youtube.com/embed/_ng1QZQTVQg`
//     // videoEl.controls = true
//     // videoEl.classList.add('videoDance')
//     // danceSection.append(videoEl)
    
//     closeVideoBtn.style.display = 'block'

//     closeVideoBtn.addEventListener('click', () => {
//     videoEl.remove()
//     greyTextDance(id)
//     closeVideoBtn.style.display = 'none'
//     })
// }

function greyTextDance(id) {
    danceButtons.forEach(item => {
        if(item.id === id) {
            console.log(item.id);
            item.style.color = 'grey'
        }
    })
}

function whiteDance() {
    btns.forEach(item => item.style.color = '#fff')
}

const chooseButtonsDance2 = [...document.querySelectorAll('.dance2_choose_button')];
console.log(chooseButtonsDance2);
// const check = [...document.querySelectorAll('.checkbox-dance')]

// const audio = [...document.querySelectorAll('.myAudio')];
// const playPauseBtn = [...document.querySelectorAll('.playPauseBtn')];

// console.log(audio);
// console.log(playPauseBtn);


// playPauseBtn.forEach(item => {
//     console.log(item);
    
//     item.addEventListener('click', (e) => {
//         const parent = e.target.closest('div')
//         const audio = parent.querySelector('audio')
        
//   if (audio.paused) {
//     audio.play();
//     item.textContent = '⏸ Pause';
//   } else {
//     audio.pause();
//     item.textContent = '▶️ Play';
//   }
// });
// })
// check.forEach(check => {
//     check.addEventListener('change', (e) => {
//         if(check.checked) {
//             const parent = check.closest('button');
//             parent.style.background = 'grey'
//             let audio = parent.querySelector('audio')
//             let iframe = parent.querySelector('iframe')
//             if(audio) {audio.hidden = true}
//             if(iframe) {}
//         } else {
//             check.closest('button').style.background = 
//             'linear-gradient(to bottom, #79bbff 5%, #378de5 100%)';
            
//         }

//     })
// })


chooseButtonsDance2.forEach(item => {
    item.addEventListener('pointerdown', (e) => {
        console.log(e.target);
        
        const parent = e.target.closest('div');
        const closeVideoBtn = document.querySelector('.closeVideo2')
    // console.log(closeVideoBtn);
    
  if (!parent) return; // игнорировать клики вне кнопок

  if (parent.querySelector('audio')) {
    parent.querySelector('audio').removeAttribute('hidden')
    greyDiv(parent)
  } else if (parent.querySelector('iframe')) {
    // console.log('Это кнопка с <iframe>');
    parent.querySelector('iframe').style.display = 'block'
        closeVideoBtn.style.display = 'block'
        greyDiv(parent)
        closeVideoBtn.addEventListener('click', () => {
            parent.querySelector('iframe').style.display = 'none'
            closeVideoBtn.style.display = 'none'
        })
        
        }
    })
    })

function greyDiv(el) {
    el.style.background = 'grey'
}









