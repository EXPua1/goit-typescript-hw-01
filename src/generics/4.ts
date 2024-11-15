type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const user: User = {
  name: "John",
  surname: "Doe",
  email: "user@mail",
  password: "password123",
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
  return { ...initialValues, ...updates };
}
console.log(user);

console.log(
  createOrUpdateUser(user, { email: "user@1mail.com", name: "Will" })
);
