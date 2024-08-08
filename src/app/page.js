// Importing necessary libraries and styles
'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

// Main function
function Home() {
  // State variables
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [res, setRes] = useState('');
  const [btntxt, setbtntxt] = useState('Check');

  var mailpart1 = "shashank";
  var mailpart2 = "kalwa";
  var mailpart3 = "2005";
  var domainpart1 = "gmail";
  var domainpart2 = ".com";

  // Refs
  const audioRef = useRef(null);

  // Helper functions
  const simulateScroll = (direction) => {
    const deltaY = direction === 'up' ? -100 : 100;
    window.dispatchEvent(new WheelEvent('wheel', { deltaY }));
  };

  const toggleAudio = useCallback((play) => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [audioRef]);

  // Event handlers
  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
    setIsActive(false);
    setbtntxt("Check");
    toggleAudio(false);
  }, [setIsActive, setbtntxt, setInputValue, toggleAudio]);

  const displayInput = useCallback(() => {
    const inputTrimmed = inputValue.trim();
    const inputLength = inputTrimmed.length;
    const no = Number(inputTrimmed);
    const words = inputTrimmed.split(/\s+/);
    const wordCount = words.length;

    requestAnimationFrame(() => {
      if (inputTrimmed === '') {
        setRes("No input has been entered.");
        setTimeout(() => {
          setIsActive(false);
          setbtntxt('Check');
        }, 1500);
      } else {
        let sum_of_digits = 0;
        let flag = false;

        for (var i = 0; i < inputLength; i++) {
          if (isNaN(inputTrimmed[i])) {
            sum_of_digits += Number(inputTrimmed[i]);
          } else {
            sum_of_digits += Number(inputTrimmed[i]);
          }
        }

        function isAlphabet(str) {
          return /^[a-zA-Z]+$/.test(str);
        }

        var two = inputTrimmed.replace(/[\s_\-\/\\]/g, '').toLowerCase();

        if (wordCount === 7) {
          setRes("THALA For A Reason!");
          flag = true;
          toggleAudio(true);
        } else if (no == 7) {
          setRes("THALA For A Reason!");
          flag = true;
          toggleAudio(true);
        } else if (no % 7 == 0) {
          setRes("THALA For A Reason!");
          flag = true;
          toggleAudio(true);
        } else if (sum_of_digits == 7) {
          setRes("THALA For A Reason!");
          flag = true;
          toggleAudio(true);
        } else if (!isAlphabet(inputTrimmed)) {
          if (sum_of_digits !== 0 && sum_of_digits % 7 === 0) {
            setRes("THALA For A Reason!");
            flag = true;
            toggleAudio(true);
          }
        }

        var arr = ["seven", "thala", "7hala", "dhoni", "msd", "mahi", "mahendrasinghdhoni", "ranchi", "drs", "dhoni", "dhonireviewsystem", "csk", "chennaisuperkings", "whistlepodu", "yellow", "definatelynot", "81", "ziva", "sakshi", "zivadhoni", "sakshidhoni"];

        for (var n = 0; n <= arr.length - 1; n++) {
          if (two === arr[n]) {
            setRes("THALA For A Reason!");
            flag = true;
            toggleAudio(true);
            break;
          }
        }

        var string = " Under Dhoni's Captaincy."

        const specificChecks = {
          "ranchi": "Birth Place of Dhoni",
          "07071981": "Dhoni's Birth Date",
          "771981": "Dhoni's Birth Date",
          "19111988": "Dhoni's Wife's Birth Date",
          "11191988": "Dhoni's Wife's Birth Date",
          "06022015": "Ziva's Birth Date",
          "02062015": "Ziva's Birth Date",
          "622015": "Ziva's Birth Date",
          "262015": "Ziva's Birth Date",
          "23122004": "Dhoni's Debut in Cricket",
          "12232004": "Dhoni's Debut in Cricket",
          "1981": "Dhoni's Birth Year",
          "ziva": "Dhoni's Daughter",
          "DAV Jawahar Vidya Mandir": "Dhoni's School in Ranchi",
          "2007": "India won ICC World T20 and won CommonWealth Bank Series in 2007" + string,
          "2008": "India won Border-Gavaskar Trophy in 2008" + string,
          "2009": "India won Test Series in New Zealand after 41 Years in 2009" + string,
          "2010": "India won Asia Cup, Champions League T20, Border-Gavaskar Trophy and CSK won 1st IPL Trophy in 2010" + string,
          "2011": "India won ICC Cricket World Cup and CSK won 2nd IPL Trophy in 2011" + string,
          "2013": "India won ICC Champions Trophy and Border-Gavaskar Trophy in 2013" + string,
          "2014": "India won Champions League T20 in 2014" + string,
          "2016": "India won Asia Cup in 2016" + string,
          "2018": "CSK won 3rd IPL Trophy in 2018" + string,
          "2021": "CSK won 4th IPL Trophy in 2021" + string,
          "2023": "CSK won 5th IPL Trophy in 2023" + string
        };

        if (specificChecks[two]) {
          setRes(specificChecks[two]);
          flag = true;
          toggleAudio(true);
        }

        if (!flag) {
          setRes("Not THALA For A Reason!");
        }
      }
    });

    setIsActive(!isActive);

    //button text change
    if (btntxt === 'Check') {
      setbtntxt('Stop');
    } else {
      setbtntxt('Check');
      setTimeout(() => toggleAudio(false), 0);
    }

  }, [inputValue, btntxt, isActive, setIsActive, setbtntxt, setRes, toggleAudio]);

  // useEffect hook
  useEffect(() => {
    // Check if mobile
    const checkIfMobile = () => {
      setIsMobile(/Mobi|Android|iPhone/i.test(navigator.userAgent));
    };

    checkIfMobile();

    // Event handlers
    const handleResize = () => {
      if (isMobile && !/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        window.location.reload();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        displayInput();
      }
    };

    const handleScroll = (event) => {
      setHasScrolled(true);
      if (event.deltaY > 0) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
    };

    const handleAudioEnd = () => {
      setIsActive(false);
      setbtntxt('Check');
    };

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleScroll);

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);
    }

    // Simulate scroll up after a delay
    setTimeout(() => simulateScroll('up'), 9500);

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [res, isActive, isMobile, displayInput]);

  return (
    <>
      {isMobile ? (
        <div className={styles.dexsitenote}><h1>!! Please open in the PC !! <br /> OR <br /> !! Else enable desktop site option and rotate your phone to landscape view then refresh the page once to view this page properly !!</h1></div>
      ) : (
        <div className={scrollDirection === 'down' ? styles.screenActive : styles.screen}>
          <header className={scrollDirection === 'down' ? styles.headerActive : styles.header}>
            <a href="/">Thala For A Reason</a>
            <ul>
              <li><a href="#" className={styles.h} onClick={() => simulateScroll('up')}>Home</a></li>
              <li><a href="#" className={styles.a} onClick={() => simulateScroll('down')}>About</a></li>
            </ul>
          </header>

          <div className={styles.all}>
            <form action="#">
              <div className={styles.inputWrapper}>
                <div className={scrollDirection === 'down' ? styles.input : styles.inputActive}>
                  <p className={styles.p}>Give Your Input</p>
                  <div className={styles.sep}></div>
                  <textarea className={styles.txt} value={inputValue} onChange={handleInputChange} name="txt" rows="7" />
                  <div className={styles.btn} onClick={displayInput}><p>{btntxt}</p></div>
                  <audio ref={audioRef} src="/dhonisong.wav" />
                  <div className={isActive ? styles.activeClass : styles.inactiveClass}>{res}</div>
                </div>
                <Image className={scrollDirection === 'down' ? styles.imgActive : styles.img} src="/images/seven.png" alt="Logo" width={300} height={300} unoptimized={true} loading='lazy' onClick={() => window.open('https://en.wikipedia.org/wiki/MS_Dhoni')} />
              </div>
            </form>
            <div className={styles.divider}></div>
            <div className={styles.abtWrapper}>
              <Image className={hasScrolled === false ? styles.logo : scrollDirection === 'down' ? styles.logo : styles.logoActive} src="/images/csk.png" alt="Logo" width={275} height={275} unoptimized={true} priority={true} loading='eager' onClick={() => window.open('https://www.chennaisuperkings.com/')} />
              <div className={scrollDirection === 'down' ? styles.aboutActive : styles.about}>
                <div className={styles.atitle}>A-b-o-u-t</div>
                <div className={styles.abt}>
                  <p>A Project By : <br /><a>Shashank L. Kalwa</a></p>
                  <div className={styles.links}>
                    <div className={styles.insta} onClick={() => window.open('https://www.instagram.com/shashank.k2211?igsh=aGgzajNrOXl6bjlj')}></div>
                    <div className={styles.linked} onClick={() => window.open('https://www.linkedin.com/in/shashank-kalwa-6462302a4/')}></div>
                    <div className={styles.github} onClick={() => window.open('https://github.com/ShashankKalwa')}></div>
                    <div className={styles.mail} onClick={() => window.open(`mailto:${mailpart1}${mailpart2}${mailpart3}@${domainpart1}${domainpart2}`)}>E-MAIL</div>
                    <div className={styles.portfolio} onClick={() => alert("Currently Not Available !!!")}>PORTFOLIO</div>
                  </div>

                  <div className={styles.alert}>Audio By : <div className={styles.credit} onClick={() => window.open('https://youtu.be/Q8iwyMc5bJc?feature=shared')}> Dwayne ( DJ ) Bravo </div>!! This website is created solely for entertainment purposes. It is a fun project and is not intended to serve any practical use or provide any benefits. Any interactions or activities on this website are to be considered recreational and should not be relied upon for any serious purposes. Enjoy your time here. !!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
