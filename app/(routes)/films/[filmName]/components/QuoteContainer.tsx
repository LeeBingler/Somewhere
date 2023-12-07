function QuoteContainer({ quote }: { quote: { quote: string; author: string } }) {
    return (
        <div className='mb-[8vh]'>
            <p className='font-Poppins text-[5.6vw] leading-[8.27vw] font-extrabold whitespace-pre-line'>
                “{quote.quote}“
            </p>
            <div className='flex items-center'>
                <span className='border-b-2 border-black block w-20 mr-7' />
                <p className='font-Arapey text-[4.5vw] italic text-center'>{quote.author}</p>
            </div>
        </div>
    );
}

export default QuoteContainer;
