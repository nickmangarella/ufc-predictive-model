(function ufcViz() {

    let ufcWeightContainer = document.getElementById("fighterWeight");
    let ufcURL = "https://public.tableau.com/views/Project-3_16186819550490/WeightClass?:language=en&:display_count=y&:origin=viz_share_link";

    let ufcCountryContainer = document.getElementById("fightCountry");
    let ufcCountryURL = "https://public.tableau.com/views/Project-3_16186819550490/Sheet1?:language=en&:display_count=y&:origin=viz_share_link";



    new tableau.Viz(ufcWeightContainer, ufcURL);
    new tableau.Viz(ufcCountryContainer, ufcCountryURL);












})()