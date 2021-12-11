export const join = (req, res) => res.send("Joining Users Controller")
export const edit = (req, res) => res.send("Edit users Controller");
export const remove = (req, res) => res.send("Remove/Delete users Controller");
//"delete"는 JavaScript에서 이미 예약되어 있어서 변수명으로 사용할 수 없다.
//JavaScript에는 변수로 사용할 수 없는 몇가지 단어가 있다: new, delete, 

//export default로는 한 파일에서 한 가지 밖에 export하지 못한다. 
//따라서 한 파일에서 export하는 여러개의 변수가 있을 때는 위와 같이 export한다.

