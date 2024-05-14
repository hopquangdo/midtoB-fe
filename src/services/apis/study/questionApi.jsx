import axiosClient from "../apiClient";

class QuestionApi {
    createQuestion =  (formData) => {
        const url = '/question/create';
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization'],
                'Content-Type': 'multipart/form-data'
            }
        };
        return axiosClient.post(url, formData, config);
    };

    getAllQuestions = () => {
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization']
            }
        };
        const url = '/question/';
        return axiosClient.get(url, config);
    }

    getQuestionsWithoutSolution = () => {
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization']
            }
        };
        const url = '/question/?haveSolution=0';
        return axiosClient.get(url, config);
    }

    getQuestionsWithSolution = () => {
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization']
            }
        };
        const url = '/question/?haveSolution=1';
        return axiosClient.get(url, config);
    }

    getQuestionDetail = (questionId) => {
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization']
            }
        };
        const url = `/question/${questionId}`;
        return axiosClient.get(url, config);
    }

    deleteQuestion = (questionId) => {
        const config = {
            headers: {
                'Authorization': axiosClient.defaults.headers.common['Authorization']
            }
        };
        const url = `/question?questionId=${questionId}`;
        return axiosClient.delete(url, config);
    }
}

const questionApi = new QuestionApi();
export default questionApi;
