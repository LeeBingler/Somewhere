function QuoteContainer({ quote }: { quote: { quote: string; author: string } }) {
    return (
        <div className='mb-[8vh] max-w-lg'>
            <p className='font-Poppins text-[5.6vw] leading-[8.27vw] font-extrabold whitespace-pre-line md:text-[max(2vw,30px)] md:leading-[max(3vw,44px)]'>
                “{quote.quote}“
            </p>
            <div className='flex items-center mt-5'>
                <span className='border-b-2 border-black block w-20 mr-7' />
                <p className='font-Arapey text-[4.5vw] italic text-center md:text-[max(1vw,20px)]'>{quote.author}</p>
            </div>
        </div>
    );
}

export default QuoteContainer;
