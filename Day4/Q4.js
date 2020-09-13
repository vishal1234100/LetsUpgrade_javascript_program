array_object = [

{
	name:"vishal",
	age: 21,
	country : "india",
	hobbies : ["coding","mathematics","bike riding","movie"]
},

{
	name:"kunal",
	age: 45,
	country : "india",
	hobbies : ["fitness","bike riding","movie","shopping"]
},

{
	name:"ajay",
	age: 25,
	country : "america",
	hobbies : ["cricket","travelling"]
},

{
	name:"priyanka",
	age: 25,
	country : "autralia",
	hobbies : ["designing","travelling","drawing","eating"]
},

{
	name:"ravi",
	age: 31,
	country : "india",
	hobbies : ["teaching","bike riding","movie","travelling"]
},
{
	name:"jay",
	age: 40,
	country : "america",
	hobbies : ["modeling","coding","reading","action"]
},

{
	name:"jon",
	age: 24,
	country : "srilanka",
	hobbies : ["enlish speaking","cookie","travelling","cycling"]
},

{
	name:"amruta",
	age: 33,
	country : "india",
	hobbies : ["speaking","reading","movie","travelling"]
}


]



function age(){
	array_object.forEach(function(item){

		if(item.age < 30){

			console.log(item);
		}
	})

}

age()


function country(){
	array_object.forEach(function(item){

		if(item.country == "india"){

			console.log(item);
		}
	})

}

country()