import axios from "axios";

const QuoteService = () => {

  const getRandomQuote = async () => {
    const url = 'https://type.fit/api/quotes';

    return axios.get(url)
      .then(res => {
        const index = Math.floor(Math.random() * res.data.length);
        return {
          quote: res.data[index].text,
          auth: res.data[index].author,
        }
      });
  }

  return  { getRandomQuote };
}

export default QuoteService;