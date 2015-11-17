#pragma strict

var starttime: int;
var now: int;
var duration: int;
var style : GUIStyle;
style.normal.textColor = Color.red;

function Start () {
	starttime = Time.time;

}

function Update () {
	now = Time.time;
	duration = now - starttime;
	
}
function OnGUI () {
	
	GUI.Label(Rect(20,20,100,50), "TIME : " + now , style);
				//Rect(x座標, y座標, 幅, 高さ)
}