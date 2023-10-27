export default function greeter(){
  return {
    helloWorld: function () {
      return "hello world!";
    },
    helloPerson(name: string){
      return `hello ${name}!`;
    } 
  };
}
