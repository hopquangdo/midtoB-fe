import AnswerCard from "./AnswerCard";
import AnswerInput from "./AnswerInput";

const Answer = ({showInputAnswer}) => {
    const answers = [
        {answerId: 1,isSelected: true, score: 12, content:`One of the main reasons for records introduction in C# - make it easier to create immutable data models. with functionality was created to provide an easy to use syntax to create a copy of immutable instance with changed properties. So car = car with {Name = "BMW"}; actually does not modify the original instance (note that record's are reference types, unless they are declared as record struct's) but creates a new one and assigns it to the variable. The difference can easily be seen with the following code:`},
        {answerId: 2,isSelected: false, score: 99,content: `Start debugging, as soon as you've arrived at a breakpoint or used Debug  Break All, use Debug  Windows  Modules. You'll see a list of all the assemblies that are loaded into the process. Locate the one you want to get debug info for. Right-click it and select Symbol Load Information. You'll get a dialog that lists all the directories where it looked for the .pdb file for the assembly. Verify that list against the actual .pdb location. Make sure it doesn't find an old one.
        In normal projects, the assembly and its .pdb file should always have been copied by the IDE into the same folder as your .exe, i.e. the bin\Debug folder of your project. Make sure you remove one from the GAC if you've been playing with it.`},
    ];
    return (
        <div className=" m-3 border boder-gray-500 rounded-lg">
            <div className="flex flex-row items-center p-3 justify-between">
                <div className="text-bold text-gray-900 text-xl border border-gray-300 py-2 px-2 rounded-lg">3 câu trả lời</div>
                <div className="flex flex-row items-center">
                    <label className="m-2">Sắp xếp theo</label>
                    <form class="max-w-sm mx-auto">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Thời gian trả lời</option>
                            <option>Điểm từ cao đến thấp</option>
                            <option>Đã chọn</option>
                        </select>
                    </form>
                </div>
            </div>
            {showInputAnswer && (
                <AnswerInput/>
            )}
            <div>
                {answers.map((answer) => (
                    <AnswerCard key={answer.answerId} answer={answer}/>
                ))}
            </div>
        </div>
    )
}
export default Answer;