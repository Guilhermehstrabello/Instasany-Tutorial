'use client'

import Image from "next/image";
import { GridContainer } from "./grid";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import IconFile from '/public/icon-file.svg'
import IconHand from '/public/icon-hand.svg'
import IconHand02 from '/public/icon-hand-02.svg'
import IconMockup from '/public/mockup.svg'




export function HeroSection() {

    const textHeroRef = useRef(null)
    const mockupLeftRef = useRef(null)
    const mockupRightRef = useRef(null)

    useEffect(() => {
        const textHero = textHeroRef.current
        const mLeft = mockupLeftRef.current
        const mRight = mockupRightRef.current

        gsap.fromTo(textHero, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        })

        gsap.fromTo(mLeft, {
            rotate: 0
        }, {
            rotate: -10,
            duration: .4
        })

        gsap.fromTo(mRight, {
            rotate: 0
        }, {
            rotate: 10,
            duration: .4
        })
    }, []);

    return (
        <section className="relative w-full bg-green-primary h-hero-section border-t bg-hero bg-no-repeat bg-top border-t-green-border pt-16 overflow-hidden">
            <GridContainer className="flex flex-col items-center">

                <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
                    <h3 className="text-xl font-medium text-green-actived mb-4">Novo curso focado em instagram</h3>
                    <h1 className="text-slate-50 text-7xl/normal font-semibold mb-2">Destrave as suas habilidades</h1>

                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center m-2 gap-2">
                            <Image
                                src={IconFile}
                                alt="Icone de Arquivos"
                            />
                            <span className="text-slate-50 font-medium hover:text-green-btn transition-all">Assinar lista de espera</span>
                        </button>
                        <button className="px-5 py-4 bg-green-btn rounded-full hover:text-green-border font-bold transition-all">
                            Começar agora
                        </button>
                    </div>

                </div>

                <div className="relative w-full max-w-area-icons h-28 mt-4 ">
                    <Image
                        src={IconHand}
                        alt="Icone de Mão"
                        className="absolute left-0 bottom-0"
                        
                    />
                    <Image
                        src={IconHand02}
                        alt="Icone de Mão"
                        className="absolute top-0 right-0"
                        
                    />
                </div>

                <div className="flex justify-between absolute -bottom-44 w-full max-w-area-mockups ">
                    <Image
                        src={IconMockup}
                        alt="Mockup"
                        className="relative top-[18px] left-[53px]"
                        ref={mockupLeftRef}
                    />
                    <Image
                        src={IconMockup}
                        alt="Mockup"
                        className="relative top-[18px] right-[53px]"
                        ref={mockupRightRef}
                    />
                </div>
            </GridContainer>
        </section>
    )
}