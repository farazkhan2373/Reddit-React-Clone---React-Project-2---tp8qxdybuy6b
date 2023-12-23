export const getHeadersWithUserToken = ()=>{
    const userToken = sessionStorage.getItem('userToken');
    const obj = {
        headers: {
            Authorization: `Bearer ${userToken}`,
            projectID: "tp8qxdybuy6b"
        }
    }

    return obj;
}