export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ee13f084c3msh9d263349777cb80p19fff3jsn0af526ab2100 ',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};
