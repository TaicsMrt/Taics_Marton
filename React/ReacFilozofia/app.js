const btn = document.createElement('button');

btn.onclick = function()
{
    alert("Ezegy natív kód");
}

btn.innerHTML = "Nativ gomb";

document.getElementById("nativ-button-container").appendChild(btn);