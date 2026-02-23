try {
  console.log("Print first line");
  console.log("Print first line");
  console.log("Print first line");
  console.log("Print first line");
  console.log("Print first line");

  getCPUFans(); // error bec this is not defined
} catch (error) {
  // error is the parameter
  console.log(`error: ${error}`);
} finally {
  console.log("Print second line");
  console.log("Print second line");
  console.log("Print second line");
  console.log("Print second line");
  console.log("Print second line");
}

//
try {
  let personalbar;
} catch (error) {
  console.log(error);
} finally {
}
