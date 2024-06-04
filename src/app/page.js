// Importing necessary libraries and styles
'use client';
import { useCallback, useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import styles from './page.module.css'

// Main function
export default function Home() {
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
  const handleInputChange = useCallback( (event) => {
    setInputValue(event.target.value);
    setIsActive(false);
    setbtntxt("Check");
    toggleAudio(false);
  }, [setIsActive, setbtntxt, setInputValue, toggleAudio]);


  const displayInput = useCallback(() => {
  
    var result = '';
    var input = inputValue;
    if (input.trim() === '') {
      result = "No input has been entered.";

      setTimeout(() => { 
        setIsActive(false);
        setbtntxt('Check');
      }, 1500);

    } else {
      var no = Number(inputValue.trim());
      var words = input.split(' ');
      var sum_of_digits = 0;
      var flag = false;
      var inputwords = input.trim().split(/\s+/);
      var wordCount = inputwords.length;
  
      var letters = words.some(function(word) {
        return word.length === 7;
      });
  
      for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
          sum_of_digits += Number(input[i]);
        } else {
          sum_of_digits += Number(input[i]);
        }
      }     

      function isAlphabet(str) {
        return /^[a-zA-Z]+$/.test(str);
      }

      var two = input.replace(/[\s_\-\/\\]/g, '').toLowerCase();
  
      if (wordCount === 7) {
        result = "THALA For A Reason!";
        flag = true;
        toggleAudio(true);
      } else if (letters) {
        result = "THALA For A Reason!";
        flag = true;
        toggleAudio(true);
      } else if (no == 7) {
        result = "THALA For A Reason!";
        flag = true;
        toggleAudio(true);
      } else if(no % 7 == 0){
        result = "THALA For A Reason!";
        flag = true;
        toggleAudio(true);
      } else if (sum_of_digits == 7){
        result = "THALA For A Reason!";
        flag = true;
        toggleAudio(true);
      } else if(!isAlphabet(input)){
        if(sum_of_digits !== 0 && sum_of_digits % 7 === 0){
          result = "THALA For A Reason!";
          flag = true;
          toggleAudio(true);
        }
      }

      var arr = ["seven", "thala", "7hala", "dhoni", "msd", "mahi", "mahendrasinghdhoni", "ranchi", "drs", "dhoni", "dhonireviewsystem", "csk", "chennaisuperkings", "whistlepodu", "yellow", "definatelynot", "81", "ziva", "sakshi", "zivadhoni", "sakshidhoni"];

      for(var n=0; n<=arr.length-1; n++){
        var string = " Under Dhoni's Captaincy."
        
        if(two === arr[n]){
          result = "THALA For A Reason!";
          flag = true;
          toggleAudio(true);
          break;
        }
      }

      if(two === "ranchi"){
        result = "Birth Place of Dhoni";
        flag = true;
        toggleAudio(true);
      } else if(two === "07071981" || two === "771981"){
        result = "Dhoni's Birth Date";
        flag = true;
        toggleAudio(true);
      } else if(two === "19111988" || two === "11191988"){
        result = "Dhoni's Wife's Birth Date";
        flag = true;
        toggleAudio(true);
      } else if(two === "06022015" || two === "02062015" || two === "622015" || two === "262015"){
        result = "Ziva's Birth Date";
        flag = true;
        toggleAudio(true);
      } else if(two === "23122004" || two === "12232004"){
        result = "Dhoni's Debut in Cricket";
        flag = true;
        toggleAudio(true);
      } else if(two === "1981"){
        result = "Dhoni's Birth Year";
        flag = true;
        toggleAudio(true);
      } else if(two === "ziva"){
        result = "Dhoni's Daughter";
        flag = true;
        toggleAudio(true);
      } else if(two === "DAV Jawahar Vidya Mandir"){
        result = "Dhoni's School in Ranchi";
        flag = true;
        toggleAudio(true);
      } else if(two === "2007"){
        result = "India won ICC World T20 and won CommonWealth Bank Series in 2007"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2008"){
        result = "India won Border-Gavaskar Trophy in 2008"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2009"){
        result = "India won Test Series in New Zealand after 41 Years in 2009"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2010"){
        result = "India won Asia Cup, Champions League T20, Border-Gavaskar Trophy and CSK won 1st IPL Trophy in 2010"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2011"){
        result = "India won ICC Cricket World Cup and CSK won 2nd IPL Trophy in 2011"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2013"){
        result = "India won ICC Champions Trophy and Border-Gavaskar Trophy in 2013"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2014"){
        result = "India won Champions League T20 in 2014"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2016"){
        result = "India won Asia Cup in 2016"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2018"){
        result = "CSK won 3rd IPL Trophy in 2018"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2021"){
        result = "CSK won 4th IPL Trophy in 2021"+string;
        flag = true;
        toggleAudio(true);
      } else if(two === "2023"){
        result = "CSK won 5th IPL Trophy in 2023"+string;
        flag = true;
        toggleAudio(true);
      }
  
      if(flag === false){
        result = "Not THALA For A Reason!";
      }
    }

    setRes(result);

    setIsActive(!isActive);

    //button text change
    if (btntxt === 'Check') {
      setbtntxt('Stop');
    } else {
      setbtntxt('Check');
      toggleAudio(false);
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
        console.log("Scroll Down");
        setScrollDirection('down');
      } else {
        console.log("Scroll Up");
        setScrollDirection('up');
      }
    };

    const handleAudioEnd = () => {
      setIsActive(false);
      setbtntxt('Check');
    };

    // Event listenerss
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleScroll);

    const audioElement = audioRef.current;
    if(audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);
    }

    // Simulate scroll up after a delay
    setTimeout(simulateScroll('up'), 15500);

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
        <div className={styles.dexsitenote}><h1>!! Please open in the PC !! <br/> OR <br/> !! Else enable desktop site option and rotate your phone to landscape view then refresh the page once to view this page properly !!</h1></div>
      ) : (
        <div className={scrollDirection === 'down' ? styles.screenActive : styles.screen} >
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
                    <div className={styles.btn} onClick={displayInput}><p>{btntxt}</p><p></p></div>
                    <audio ref={audioRef} src="/dhonisong.wav" />
                    <div className={isActive ? styles.activeClass : styles.inactiveClass}>{res}</div>

                  </div>
                  <Image className={scrollDirection === 'down' ? styles.imgActive : styles.img} src="/images/seven.png" alt="Logo" width={1} height={1} unoptimized= {true} onClick={() => window.open('https://en.wikipedia.org/wiki/MS_Dhoni')}/>
                </div>
              </form>
              <div className={styles.divider}></div>
              <div className={styles.abtWrapper}>
                <Image className={hasScrolled === false ? styles.logo : scrollDirection === 'down' ? styles.logo : styles.logoActive} src="/images/csk.png" alt="Logo" width={275} height={275} unoptimized={true} priority={true} onClick={() => window.open('https://www.chennaisuperkings.com/')}/>
                <div className={scrollDirection === 'down' ? styles.aboutActive : styles.about}>
                <div className={styles.atitle}>A-b-o-u-t</div>
                  <div className={styles.abt}>
                    <p>A Project By : <br /><span>Shashank L. Kalwa</span></p>
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
  )
}