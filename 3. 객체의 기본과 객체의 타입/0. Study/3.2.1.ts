const objThird = {
  foo: 555,
  bar: "문자열",
};

// objThird 타입 명시
const objThird_1: {
  foo: number;
  // bar: string;
} = {
  foo: 555,
  bar: "문자열",
};

const objThird2 = {
  "foo bar": 123,
};

// objThird2 타입 명시
const objThird2_1: {
  "foo bar": number;
} = {
  "foo bar": 123,
};
