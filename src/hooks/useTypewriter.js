import { useEffect, useState } from "react";

export function useTypewriter(words, typeSpeed = 90, deleteSpeed = 50, pauseTime = 1300) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, displayText.length + 1);
          setDisplayText(nextText);

          if (nextText === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          const nextText = currentWord.slice(0, displayText.length - 1);
          setDisplayText(nextText);

          if (nextText.length === 0) {
            setIsDeleting(false);
            setIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [deleteSpeed, displayText, index, isDeleting, pauseTime, typeSpeed, words]);

  return displayText;
}
