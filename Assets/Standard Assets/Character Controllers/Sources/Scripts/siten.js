#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKey("y")){
		transform.eulerAngles.y=0;
	}
	else if(Input.GetKey("h")){
		transform.eulerAngles.y = 90.0;
	}
	else if(Input.GetKey("b")){
		transform.eulerAngles.y=180;
	}
	else if(Input.GetKey("g")){
		transform.eulerAngles.y=270;
	}
	else if(Input.GetKey("t")){
		transform.eulerAngles.x=0;
	}
	else if(Input.GetKey("u")){
		transform.eulerAngles.x=270;
	}
	else if(Input.GetKey("j")){
		transform.Translate( 0 , 0.5 , 0 );
	}
	else if(Input.GetKey("n")){
		transform.Translate( 0 , -0.5 , 0 );
	}


}