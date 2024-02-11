import Image from "next/image";
import Link from "next/link";

import LogoImg from '/public/logo.svg'
import SearchIcon from '/public/icon-search.svg'
import IconUser from '/public/icon-user.svg'
import { GridContainer } from "./grid";

const arrayMenu = [
    'Início',
    'Benefícios',
    'Para quem é o curso?',
    'Preços promocionais',
    'Sobre nós'
]

export function Header(){

    const activedStyle = 'bg-green-actived text-slate-50 rounded-full'
    return(
        <header className="relative w-full h-24 bg-green-primary flex itens-center">
            <GridContainer className="flex items-center justify-between">
                <Image
                    src={LogoImg} 
                    alt={"Logo Instasany"}
                />
                <div className="flex items-center gap-20 ">
                    <nav className="flex gap-2">
                        {
                            arrayMenu.map((item, index) => (
                                <Link key={index} href="#" className={`px-3 py-2 text-slate-50/40 hover:text-slate-50 transition-all ${index === 0 ? activedStyle : ''}`}>{item}</Link>
                            ))
                        }
                        
                    </nav>
                    <div className="flex items-center gap-6">
                        <button>
                            <Image
                                src={SearchIcon} 
                                alt={"Logo Instasany"}
                            />
                        </button>
                        <button className="flex items-center gap-2" >
                            <Image
                                src={IconUser} 
                                alt={"Logo Instasany"}
                            />
                            <span className="text-slate-50">Fazer Login</span>
                        </button>
                    </div>
                </div>
            </GridContainer>
        </header>
    )
    
}