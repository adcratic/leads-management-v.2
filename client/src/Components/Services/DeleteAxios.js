import axios from "axios";

const DeleteAxios = async (data) => {
    const response = await axios.delete("http://localhost:5000:/leadsData/delete")
    var result=response.data;
    console.log(result);
    return result;
}

export default DeleteAxios