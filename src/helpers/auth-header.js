export function authHeader() {
  const token = localStorage.getItem("token");
  //const token = "1YjUNt3OFU2o49C5YHYqIby96hJ5NC6Ule91GpQJpm8=";

    return { 'Content-Type' : 'application/json','Authorization' : token};
}
