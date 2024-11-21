import { API_URL } from "./constants";

export async function getCategories(setState) {
    try {
      const url = API_URL + `/customers/getCategories`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data[2].category_name);
    // data.forEach((data) => {
    //     console.log(data.category_name);
    //   });
      setState(data)
    } catch(err) {
      console.error(err)
    }
}


export async function addCategory(setState, values) {
  try {
    const url = API_URL + `/categories/addCategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}

export async function addSubCategory(setState) {
  try {
    const url = API_URL + `/categories/addSubcategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}

export async function addTask(setState) {
  try {
    const url = API_URL + `/categories/addTask`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}

export async function updateSubcategory(setState) {
  try {
    const url = API_URL + `/categories/updateSubcategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}
export async function updateTask(setState) {
  try {
    const url = API_URL + `/customers/updateTask`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}
export async function deleteCategory(setState) {
  try {
    const url = API_URL + `/categories/deleteCategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}


export async function deleteSubCategory(setState) {
  try {
    const url = API_URL + `/categories/deleteSubCategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}
export async function deleteTask(setState) {
  try {
    const url = API_URL + `/categories/deleteTask`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}

export async function getCategory(setState) {
  try {
    const url = API_URL + `/categories/getCategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}

export async function getSubcategory(setState) {
  try {
    const url = API_URL + `/categories/getSubcategory`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}

export async function getTask(setState) {
  try {
    const url = API_URL + `/categories/getTask`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data[2].category_name);
  // data.forEach((data) => {
  //     console.log(data.category_name);
  //   });
    setState(data)
  } catch(err) {
    console.error(err)
  }
}