/*
 * Block - PamoSlideShow
 *
 * @jsxImportSource @emotion/react
 */

import Image from 'next/image';
import { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Grid, Box, Typography } from '@mui/material';
import { FiberManualRecord, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import styles from './styles';

const PamoSlideShow = ({ images, settings }) => {
    const { autoplay, interval, arrows, dots } = settings;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [pause, setPause] = useState(false);
    const timer = useRef();

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        initial: 0,
        slideChanged: (s) => {
            setCurrentSlide(s.details().relativeSlide)
        },
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
    });

    const SlideLeftArrow = ({ disabled, ...rest }) => {
        return (
            <KeyboardArrowLeft
                css={styles.slideshowArrows}
                className={`${!disabled && "clickable"} left-arrow`}
                onClick={() => {
                    !disabled && slider.prev();
                    !disabled && autoplay && restartTimer();
                }}
                color={disabled ? "disabled" : "secondary"}
                {...rest}
            />
        )
    };
      
    const SlideRightArrow = ({ disabled, ...rest }) => {
        return (
            <KeyboardArrowRight
                css={styles.slideshowArrows}
                className={`${!disabled && "clickable"} right-arrow`}
                onClick={() => {
                    !disabled && slider.next();
                    !disabled && autoplay && restartTimer();
                }}
                color={disabled ? "disabled" : "secondary"}
                {...rest}
            />
        )
    };

    const setTimer = () => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, (interval * 1000));
    };

    const restartTimer = () => {
        clearInterval(timer.current);
        setTimer();
    };

    const autoSlideshowEffect = () => {
        useEffect(() => {
            setTimer();
    
            /* Cleanup when unmounting */
            return () => {
                clearInterval(timer.current);
            }
        }, [pause, slider]);
    };

    autoplay && autoSlideshowEffect();

    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef]);

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Box css={styles.slideshowSlider}>
                    <Box ref={sliderRef} className="keen-slider">
                        {images.map(image => {
                            const { id, url, caption, alternativeText } = image;

                            return (
                                <figure key={id} className={`keen-slider__slide number-slide${id}`}>
                                    <Box css={styles.slideshowImage}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                                            alt={alternativeText}
                                            layout='responsive'
                                            objectFit='contain'
                                            width={16}
                                            height={9}
                                        />
                                    </Box>

                                    {caption &&
                                        <figcaption css={styles.slideshowCaption}>
                                            <Typography color="primary" variant="subtitle1">{caption}</Typography>
                                        </figcaption>
                                    }
                                </figure>
                            )
                        })}
                    </Box>

                    {slider && arrows && (
                        <>
                            <SlideLeftArrow disabled={currentSlide === 0} />

                            <SlideRightArrow disabled={currentSlide === slider.details().size - 1} />
                        </>
                    )}
                </Box>

                {slider && dots && (
                    <Box css={styles.slideshowChooser}>
                        {[...Array(slider.details().size).keys()].map((idx) => {
                            return (
                                <FiberManualRecord 
                                    key={idx}
                                    className={"slide clickable" + (currentSlide === idx ? " active" : "")}
                                    onClick={() => {
                                        slider.moveToSlideRelative(idx);
                                        autoplay && restartTimer();
                                    }}
                                />
                            )
                        })}
                    </Box>
                )}
            </Grid>
        </Grid>
    )
};

export default PamoSlideShow;