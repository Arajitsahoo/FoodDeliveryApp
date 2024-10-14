import { sum } from "../Sum";

test("sum", ()=>{
    const result = sum(6,4)

    expect(result).toBe(10);

});
