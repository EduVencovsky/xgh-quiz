export interface QuestionData {
    questionId: string
    value: number,
}
export interface QuestionOption {
    value: number
    description?: string
}

export interface Question {
    id: string
    title: string
    description: string
    options: QuestionOption[]
}

export const questions: Question[] = [
    {
        id: 'how_often_do_you_have_to_think',
        title: 'How often do you have to think?',
        description: '',
        options: [{ value: 0, description: 'Always' }, { value: 4, description: 'Never' }],
    },
    {
        id: 'how_often_do_you_refactor_your_code',
        title: 'How often do you refactor your code?',
        description: '',
        options: [{ value: 4, description: 'Always' }, { value: 0, description: 'Never' }],
    },
    {
        id: 'how_much_test_coverage_you_have',
        title: 'How much test coverage you have?',
        description: '',
        options: [{ value: 4, description: 'I don\'t write tests', }, { value: 0, description: '100% test coverage' }],
    },
    // {
    //     id: 'when_a_problem_occurs_how_fast_do_you_need_to_fix_it',
    //     title: 'When a problem occurs, how fast do you need to fix it?',
    //     description: '',
    //     options: [{ value: 4, description: 'Immediately', }, { value: 0, description: '100% test coverage' }],
    // },
    {
        id: 'how_many_todo_comments_your_code_base_have',
        title: 'How many TODO comments your code base have?',
        description: '',
        options: [{ value: 4, description: 'Many', }, { value: 0, description: 'None' }],
    },
    {
        id: 'how_often_you_test_your_changes_before_pushing_a_commit',
        title: 'How often you test your changes before pushing a commit?',
        description: '',
        options: [{ value: 0, description: 'Always' }, { value: 4, description: 'Never' }],
    },
    {
        id: 'how_often_do_you_follow_design_patterns',
        title: 'How often do you follow design patterns?',
        description: '',
        options: [{ value: 0, description: 'Always' }, { value: 4, description: 'Never' }],
    }
]