// Create an array of subjects in the biochemistry department
var biochemistrySubjects = [
    {
        name: 'Biochemistry I',
        type: 'major',
        duration: '6 months',
        semester: 1
    },
    {
        name: 'Cell Biology',
        type: 'major',
        duration: '6 months',
        semester: 1
    },
    {
        name: 'Organic Chemistry',
        type: 'minor',
        duration: '4 months',
        semester: 1
    },
    {
        name: 'Molecular Biology',
        type: 'major',
        duration: '6 months',
        semester: 2
    },
    {
        name: 'Genetics',
        type: 'major',
        duration: '6 months',
        semester: 2
    },
    {
        name: 'Physical Chemistry',
        type: 'minor',
        duration: '4 months',
        semester: 2
    },
    {
        name: 'Enzymology',
        type: 'major',
        duration: '6 months',
        semester: 3
    },
    {
        name: 'Microbiology',
        type: 'major',
        duration: '6 months',
        semester: 3
    },
    {
        name: 'Analytical Chemistry',
        type: 'minor',
        duration: '4 months',
        semester: 3
    },
    {
        name: 'Immunology',
        type: 'major',
        duration: '6 months',
        semester: 4
    },
    {
        name: 'Biophysics',
        type: 'major',
        duration: '6 months',
        semester: 4
    },
    {
        name: 'Inorganic Chemistry',
        type: 'minor',
        duration: '4 months',
        semester: 4
    }
];
// Function to display all subjects in the biochemistry department
var displaySubject = function (subjects) {
    subjects.forEach(function (subject) {
        console.log("Name: ".concat(subject.name));
        console.log("Type: ".concat(subject.type));
        console.log("Duration: ".concat(subject.duration));
        console.log("Semester: ".concat(subject.semester));
        console.log('---------------------------');
    });
};
// Call the function to display the subjects
displaySubject(biochemistrySubjects);
