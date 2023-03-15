function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67SExBSGNwa":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbynmatyksZ2igFg3dgc_21lOjhKrImqwPb97lB6H-LB2kE6T40cXwj0pUczj-Go2w493A/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

