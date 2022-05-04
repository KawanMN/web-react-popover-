import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        Image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        Image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        Image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedBackType] = useState<FeedbackType | null>(null)


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col intens-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />

            ): (
               <FeedbackContentStep feedbackType={feedbackType}/>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela Rocketseat <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>

            </footer>
        </div>

    );
}