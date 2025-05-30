import React, { useState } from 'react';
import { Search, MapPin, ExternalLink } from 'lucide-react';

interface University {
  id: string;
  name: string;
  location: string;
  ranking: number;
  description: string;
  popularPrograms: string[];
  website: string;
  country: string;
}

const UniversitySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [sortOrder, setSortOrder] = useState<'alphabetical' | 'ranking'>('ranking');

  const countries = [
    { id: 'usa', label: 'United States', flag: '🇺🇸', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_the_United_States' },
    { id: 'uk', label: 'United Kingdom', flag: '🇬🇧', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_the_United_Kingdom' },
    { id: 'canada', label: 'Canada', flag: '🇨🇦', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_Canada' },
    { id: 'australia', label: 'Australia', flag: '🇦🇺', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_Australia' },
    { id: 'germany', label: 'Germany', flag: '🇩🇪', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_Germany' },
    { id: 'singapore', label: 'Singapore', flag: '🇸🇬', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_Singapore' },
    { id: 'newzealand', label: 'New Zealand', flag: '🇳🇿', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_New_Zealand' },
    { id: 'netherlands', label: 'Netherlands', flag: '🇳🇱', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_the_Netherlands' },
    { id: 'ireland', label: 'Ireland', flag: '🇮🇪', wikiUrl: 'https://en.wikipedia.org/wiki/List_of_universities_in_the_Republic_of_Ireland' },
  ];

  const allUniversities: University[] = [
    // USA Universities (15)
    { id: 'harvard', name: 'Harvard University', location: 'Cambridge, MA', ranking: 1, description: 'Ivy League university with world-class reputation across disciplines.', popularPrograms: ['Law', 'Medicine', 'Business'], website: 'https://www.harvard.edu', country: 'usa' },
    { id: 'stanford', name: 'Stanford University', location: 'Stanford, CA', ranking: 2, description: 'Leading research university in Silicon Valley with entrepreneurial culture.', popularPrograms: ['Computer Science', 'Engineering', 'Business'], website: 'https://www.stanford.edu', country: 'usa' },
    { id: 'mit', name: 'Massachusetts Institute of Technology', location: 'Cambridge, MA', ranking: 3, description: 'World leader in science and technology education and research.', popularPrograms: ['Engineering', 'Computer Science', 'Physics'], website: 'https://www.mit.edu', country: 'usa' },
    { id: 'caltech', name: 'California Institute of Technology', location: 'Pasadena, CA', ranking: 4, description: 'Small but prestigious science and engineering institute.', popularPrograms: ['Physics', 'Engineering', 'Chemistry'], website: 'https://www.caltech.edu', country: 'usa' },
    { id: 'chicago', name: 'University of Chicago', location: 'Chicago, IL', ranking: 5, description: 'Intellectual powerhouse with strong economics and social sciences.', popularPrograms: ['Economics', 'Law', 'Business'], website: 'https://www.uchicago.edu', country: 'usa' },
    { id: 'penn', name: 'University of Pennsylvania', location: 'Philadelphia, PA', ranking: 6, description: 'Ivy League university with top professional schools.', popularPrograms: ['Business', 'Medicine', 'Law'], website: 'https://www.upenn.edu', country: 'usa' },
    { id: 'yale', name: 'Yale University', location: 'New Haven, CT', ranking: 7, description: 'Historic Ivy League university with renowned arts and humanities.', popularPrograms: ['Law', 'Drama', 'Political Science'], website: 'https://www.yale.edu', country: 'usa' },
    { id: 'columbia', name: 'Columbia University', location: 'New York, NY', ranking: 8, description: 'Urban Ivy League university with global perspective.', popularPrograms: ['Journalism', 'Business', 'International Relations'], website: 'https://www.columbia.edu', country: 'usa' },
    { id: 'princeton', name: 'Princeton University', location: 'Princeton, NJ', ranking: 9, description: 'Undergraduate-focused Ivy with beautiful campus.', popularPrograms: ['Mathematics', 'Physics', 'Public Policy'], website: 'https://www.princeton.edu', country: 'usa' },
    { id: 'cornell', name: 'Cornell University', location: 'Ithaca, NY', ranking: 10, description: 'Ivy League with strengths in agriculture and engineering.', popularPrograms: ['Hotel Administration', 'Engineering', 'Agriculture'], website: 'https://www.cornell.edu', country: 'usa' },
    { id: 'johns-hopkins', name: 'Johns Hopkins University', location: 'Baltimore, MD', ranking: 11, description: 'Leader in medical education and research.', popularPrograms: ['Medicine', 'Public Health', 'Engineering'], website: 'https://www.jhu.edu', country: 'usa' },
    { id: 'northwestern', name: 'Northwestern University', location: 'Evanston, IL', ranking: 12, description: 'Strong in journalism, performing arts, and business.', popularPrograms: ['Journalism', 'Business', 'Performing Arts'], website: 'https://www.northwestern.edu', country: 'usa' },
    { id: 'duke', name: 'Duke University', location: 'Durham, NC', ranking: 13, description: 'Prestigious university with strong athletics program.', popularPrograms: ['Medicine', 'Law', 'Business'], website: 'https://www.duke.edu', country: 'usa' },
    { id: 'brown', name: 'Brown University', location: 'Providence, RI', ranking: 14, description: 'Ivy League with open curriculum and liberal approach.', popularPrograms: ['Computer Science', 'Economics', 'Biology'], website: 'https://www.brown.edu', country: 'usa' },
    { id: 'vanderbilt', name: 'Vanderbilt University', location: 'Nashville, TN', ranking: 15, description: 'Southern university with strong medical center.', popularPrograms: ['Medicine', 'Law', 'Business'], website: 'https://www.vanderbilt.edu', country: 'usa' },

    // UK Universities (15)
    { id: 'oxford', name: 'University of Oxford', location: 'Oxford, England', ranking: 1, description: "World's oldest English-speaking university with tutorial-based teaching.", popularPrograms: ['Humanities', 'Sciences', 'Politics'], website: 'https://www.ox.ac.uk', country: 'uk' },
    { id: 'cambridge', name: 'University of Cambridge', location: 'Cambridge, England', ranking: 2, description: 'Historic collegiate university with 31 autonomous colleges.', popularPrograms: ['Natural Sciences', 'Engineering', 'Mathematics'], website: 'https://www.cam.ac.uk', country: 'uk' },
    { id: 'imperial', name: 'Imperial College London', location: 'London, England', ranking: 3, description: 'Science-focused institution with strong industry links.', popularPrograms: ['Engineering', 'Medicine', 'Business'], website: 'https://www.imperial.ac.uk', country: 'uk' },
    { id: 'ucl', name: 'University College London', location: 'London, England', ranking: 4, description: 'Diverse university with strengths across many disciplines.', popularPrograms: ['Architecture', 'Medicine', 'Economics'], website: 'https://www.ucl.ac.uk', country: 'uk' },
    { id: 'lse', name: 'London School of Economics', location: 'London, England', ranking: 5, description: 'World-leading social science university.', popularPrograms: ['Economics', 'Politics', 'Law'], website: 'https://www.lse.ac.uk', country: 'uk' },
    { id: 'edinburgh', name: 'University of Edinburgh', location: 'Edinburgh, Scotland', ranking: 6, description: "Historic university with beautiful campus in Scotland's capital.", popularPrograms: ['Medicine', 'Literature', 'Informatics'], website: 'https://www.ed.ac.uk', country: 'uk' },
    { id: 'manchester', name: 'University of Manchester', location: 'Manchester, England', ranking: 7, description: 'Red brick university with strong research output.', popularPrograms: ['Physics', 'Engineering', 'Business'], website: 'https://www.manchester.ac.uk', country: 'uk' },
    { id: 'kings', name: "King's College London", location: 'London, England', ranking: 8, description: 'Historic university with strengths in health and humanities.', popularPrograms: ['Medicine', 'Law', 'International Relations'], website: 'https://www.kcl.ac.uk', country: 'uk' },
    { id: 'bristol', name: 'University of Bristol', location: 'Bristol, England', ranking: 9, description: 'Research-intensive university with strong student satisfaction.', popularPrograms: ['Engineering', 'Social Sciences', 'Arts'], website: 'https://www.bristol.ac.uk', country: 'uk' },
    { id: 'warwick', name: 'University of Warwick', location: 'Coventry, England', ranking: 10, description: 'Modern campus university with strong business school.', popularPrograms: ['Business', 'Mathematics', 'Economics'], website: 'https://www.warwick.ac.uk', country: 'uk' },
    { id: 'glasgow', name: 'University of Glasgow', location: 'Glasgow, Scotland', ranking: 11, description: 'Historic Scottish university with strong research.', popularPrograms: ['Medicine', 'Law', 'Engineering'], website: 'https://www.gla.ac.uk', country: 'uk' },
    { id: 'durham', name: 'Durham University', location: 'Durham, England', ranking: 12, description: 'Collegiate university with medieval heritage.', popularPrograms: ['Theology', 'Law', 'Business'], website: 'https://www.dur.ac.uk', country: 'uk' },
    { id: 'sheffield', name: 'University of Sheffield', location: 'Sheffield, England', ranking: 13, description: 'Red brick university with strong engineering programs.', popularPrograms: ['Engineering', 'Medicine', 'Architecture'], website: 'https://www.sheffield.ac.uk', country: 'uk' },
    { id: 'birmingham', name: 'University of Birmingham', location: 'Birmingham, England', ranking: 14, description: 'Red brick university with diverse course offerings.', popularPrograms: ['Business', 'Medicine', 'Engineering'], website: 'https://www.birmingham.ac.uk', country: 'uk' },
    { id: 'leeds', name: 'University of Leeds', location: 'Leeds, England', ranking: 15, description: 'Large university with strong research profile.', popularPrograms: ['Business', 'Engineering', 'Arts'], website: 'https://www.leeds.ac.uk', country: 'uk' },

    // Canada Universities (15)
    { id: 'toronto', name: 'University of Toronto', location: 'Toronto, ON', ranking: 1, description: "Canada's top-ranked university with three campuses in Toronto.", popularPrograms: ['Medicine', 'Engineering', 'Business'], website: 'https://www.utoronto.ca', country: 'canada' },
    { id: 'ubc', name: 'University of British Columbia', location: 'Vancouver, BC', ranking: 2, description: 'Stunning campus with strong research programs.', popularPrograms: ['Forestry', 'Computer Science', 'Business'], website: 'https://www.ubc.ca', country: 'canada' },
    { id: 'mcgill', name: 'McGill University', location: 'Montreal, QC', ranking: 3, description: 'English-language university in French-speaking Montreal.', popularPrograms: ['Medicine', 'Law', 'Management'], website: 'https://www.mcgill.ca', country: 'canada' },
    { id: 'waterloo', name: 'University of Waterloo', location: 'Waterloo, ON', ranking: 4, description: 'Leader in co-operative education and technology programs.', popularPrograms: ['Computer Science', 'Engineering', 'Mathematics'], website: 'https://uwaterloo.ca', country: 'canada' },
    { id: 'alberta', name: 'University of Alberta', location: 'Edmonton, AB', ranking: 5, description: 'Comprehensive research university in western Canada.', popularPrograms: ['Engineering', 'Business', 'Health Sciences'], website: 'https://www.ualberta.ca', country: 'canada' },
    { id: 'mcmaster', name: 'McMaster University', location: 'Hamilton, ON', ranking: 6, description: 'Innovative medical school and health sciences programs.', popularPrograms: ['Health Sciences', 'Engineering', 'Business'], website: 'https://www.mcmaster.ca', country: 'canada' },
    { id: 'western', name: 'Western University', location: 'London, ON', ranking: 7, description: 'Strong professional programs and student experience.', popularPrograms: ['Business', 'Law', 'Health Sciences'], website: 'https://www.uwo.ca', country: 'canada' },
    { id: 'queens', name: "Queen's University", location: 'Kingston, ON', ranking: 8, description: 'Undergraduate-focused with strong school spirit.', popularPrograms: ['Business', 'Engineering', 'Arts'], website: 'https://www.queensu.ca', country: 'canada' },
    { id: 'calgary', name: 'University of Calgary', location: 'Calgary, AB', ranking: 9, description: 'Strong in energy and environmental research.', popularPrograms: ['Engineering', 'Business', 'Kinesiology'], website: 'https://www.ucalgary.ca', country: 'canada' },
    { id: 'ottawa', name: 'University of Ottawa', location: 'Ottawa, ON', ranking: 10, description: "Bilingual university in Canada's capital.", popularPrograms: ['Law', 'Political Science', 'Health Sciences'], website: 'https://www.uottawa.ca', country: 'canada' },
    { id: 'victoria', name: 'University of Victoria', location: 'Victoria, BC', ranking: 11, description: 'Beautiful island campus with strong co-op programs.', popularPrograms: ['Engineering', 'Business', 'Environmental Studies'], website: 'https://www.uvic.ca', country: 'canada' },
    { id: 'dalhousie', name: 'Dalhousie University', location: 'Halifax, NS', ranking: 12, description: 'Leading university in Atlantic Canada.', popularPrograms: ['Law', 'Medicine', 'Oceanography'], website: 'https://www.dal.ca', country: 'canada' },
    { id: 'simon-fraser', name: 'Simon Fraser University', location: 'Burnaby, BC', ranking: 13, description: 'Innovative university with trimester system.', popularPrograms: ['Business', 'Computer Science', 'Communication'], website: 'https://www.sfu.ca', country: 'canada' },
    { id: 'laval', name: 'Université Laval', location: 'Quebec City, QC', ranking: 14, description: 'Leading French-language university in Canada.', popularPrograms: ['Medicine', 'Forestry', 'Architecture'], website: 'https://www.ulaval.ca', country: 'canada' },
    { id: 'montreal', name: 'Université de Montréal', location: 'Montreal, QC', ranking: 15, description: 'Major French-language research university.', popularPrograms: ['Medicine', 'Law', 'Computer Science'], website: 'https://www.umontreal.ca', country: 'canada' },

    // Australia Universities (15)
    { id: 'melbourne', name: 'University of Melbourne', location: 'Melbourne, VIC', ranking: 1, description: "Australia's leading comprehensive research-intensive university.", popularPrograms: ['Medicine', 'Law', 'Arts'], website: 'https://www.unimelb.edu.au', country: 'australia' },
    { id: 'sydney', name: 'University of Sydney', location: 'Sydney, NSW', ranking: 2, description: "Australia's first university with historic sandstone buildings.", popularPrograms: ['Medicine', 'Law', 'Business'], website: 'https://www.sydney.edu.au', country: 'australia' },
    { id: 'anu', name: 'Australian National University', location: 'Canberra, ACT', ranking: 3, description: 'National university with strong research focus.', popularPrograms: ['Public Policy', 'Science', 'Asia-Pacific Studies'], website: 'https://www.anu.edu.au', country: 'australia' },
    { id: 'unsw', name: 'University of New South Wales', location: 'Sydney, NSW', ranking: 4, description: 'Strong in engineering and technology programs.', popularPrograms: ['Engineering', 'Business', 'Architecture'], website: 'https://www.unsw.edu.au', country: 'australia' },
    { id: 'queensland', name: 'University of Queensland', location: 'Brisbane, QLD', ranking: 5, description: 'Beautiful campus with strong research programs.', popularPrograms: ['Agriculture', 'Medicine', 'Business'], website: 'https://www.uq.edu.au', country: 'australia' },
    { id: 'monash', name: 'Monash University', location: 'Melbourne, VIC', ranking: 6, description: "Australia's largest university with global campuses.", popularPrograms: ['Pharmacy', 'Engineering', 'Business'], website: 'https://www.monash.edu', country: 'australia' },
    { id: 'uwa', name: 'University of Western Australia', location: 'Perth, WA', ranking: 7, description: 'Leading university in Western Australia.', popularPrograms: ['Mining Engineering', 'Medicine', 'Arts'], website: 'https://www.uwa.edu.au', country: 'australia' },
    { id: 'adelaide', name: 'University of Adelaide', location: 'Adelaide, SA', ranking: 8, description: 'Historic university with strong research output.', popularPrograms: ['Wine Science', 'Medicine', 'Engineering'], website: 'https://www.adelaide.edu.au', country: 'australia' },
    { id: 'uts', name: 'University of Technology Sydney', location: 'Sydney, NSW', ranking: 9, description: 'Urban university focused on practical, career-oriented education.', popularPrograms: ['Design', 'Business', 'IT'], website: 'https://www.uts.edu.au', country: 'australia' },
    { id: 'wollongong', name: 'University of Wollongong', location: 'Wollongong, NSW', ranking: 10, description: 'Regional university with strong engineering programs.', popularPrograms: ['Engineering', 'Computer Science', 'Business'], website: 'https://www.uow.edu.au', country: 'australia' },
    { id: 'rmit', name: 'RMIT University', location: 'Melbourne, VIC', ranking: 11, description: 'Technology and design-focused university.', popularPrograms: ['Design', 'Engineering', 'Business'], website: 'https://www.rmit.edu.au', country: 'australia' },
    { id: 'macquarie', name: 'Macquarie University', location: 'Sydney, NSW', ranking: 12, description: 'Innovative university with strong business programs.', popularPrograms: ['Business', 'Linguistics', 'Psychology'], website: 'https://www.mq.edu.au', country: 'australia' },
    { id: 'curtin', name: 'Curtin University', location: 'Perth, WA', ranking: 13, description: 'Strong in mining and resources education.', popularPrograms: ['Mining Engineering', 'Business', 'Health Sciences'], website: 'https://www.curtin.edu.au', country: 'australia' },
    { id: 'griffith', name: 'Griffith University', location: 'Brisbane, QLD', ranking: 14, description: 'Innovative university with multiple campuses.', popularPrograms: ['Criminology', 'Music', 'Business'], website: 'https://www.griffith.edu.au', country: 'australia' },
    { id: 'deakin', name: 'Deakin University', location: 'Melbourne, VIC', ranking: 15, description: 'Progressive university with strong online programs.', popularPrograms: ['Business', 'Health Sciences', 'Engineering'], website: 'https://www.deakin.edu.au', country: 'australia' },

    // Germany Universities (15)
    { id: 'munich-tech', name: 'Technical University of Munich', location: 'Munich', ranking: 1, description: "Germany's top university for engineering and technology.", popularPrograms: ['Mechanical Engineering', 'Computer Science', 'Physics'], website: 'https://www.tum.de', country: 'germany' },
    { id: 'lmu-munich', name: 'Ludwig Maximilian University of Munich', location: 'Munich', ranking: 2, description: 'Comprehensive university with long history and strong research.', popularPrograms: ['Medicine', 'Physics', 'Business'], website: 'https://www.lmu.de', country: 'germany' },
    { id: 'heidelberg', name: 'Heidelberg University', location: 'Heidelberg', ranking: 3, description: "Germany's oldest university with beautiful historic campus.", popularPrograms: ['Medicine', 'Law', 'Humanities'], website: 'https://www.uni-heidelberg.de', country: 'germany' },
    { id: 'humboldt', name: 'Humboldt University of Berlin', location: 'Berlin', ranking: 4, description: "Historic university in Germany's capital city.", popularPrograms: ['Humanities', 'Social Sciences', 'Natural Sciences'], website: 'https://www.hu-berlin.de', country: 'germany' },
    { id: 'freie-berlin', name: 'Free University of Berlin', location: 'Berlin', ranking: 5, description: 'Modern research university with international focus.', popularPrograms: ['Political Science', 'Humanities', 'Natural Sciences'], website: 'https://www.fu-berlin.de', country: 'germany' },
    { id: 'rwth-aachen', name: 'RWTH Aachen University', location: 'Aachen', ranking: 6, description: 'Leading technical university with strong industry ties.', popularPrograms: ['Engineering', 'Computer Science', 'Natural Sciences'], website: 'https://www.rwth-aachen.de', country: 'germany' },
    { id: 'tubingen', name: 'University of Tübingen', location: 'Tübingen', ranking: 7, description: 'Traditional university with strong humanities and sciences.', popularPrograms: ['Medicine', 'Humanities', 'Neuroscience'], website: 'https://www.uni-tuebingen.de', country: 'germany' },
    { id: 'freiburg', name: 'University of Freiburg', location: 'Freiburg', ranking: 8, description: 'Comprehensive university in scenic Black Forest region.', popularPrograms: ['Medicine', 'Environmental Sciences', 'Humanities'], website: 'https://www.uni-freiburg.de', country: 'germany' },
    { id: 'bonn', name: 'University of Bonn', location: 'Bonn', ranking: 9, description: 'Traditional university with strong mathematics program.', popularPrograms: ['Mathematics', 'Agriculture', 'Medicine'], website: 'https://www.uni-bonn.de', country: 'germany' },
    { id: 'goettingen', name: 'University of Göttingen', location: 'Göttingen', ranking: 10, description: 'Research university with strong natural sciences.', popularPrograms: ['Biology', 'Physics', 'Forest Sciences'], website: 'https://www.uni-goettingen.de', country: 'germany' },
    { id: 'frankfurt', name: 'Goethe University Frankfurt', location: 'Frankfurt', ranking: 11, description: 'Strong in economics and social sciences.', popularPrograms: ['Economics', 'Law', 'Business'], website: 'https://www.uni-frankfurt.de', country: 'germany' },
    { id: 'karlsruhe', name: 'Karlsruhe Institute of Technology', location: 'Karlsruhe', ranking: 12, description: 'Technical university with STEM focus.', popularPrograms: ['Engineering', 'Computer Science', 'Physics'], website: 'https://www.kit.edu', country: 'germany' },
    { id: 'dresden', name: 'TU Dresden', location: 'Dresden', ranking: 13, description: 'Comprehensive technical university.', popularPrograms: ['Engineering', 'Medicine', 'Natural Sciences'], website: 'https://tu-dresden.de', country: 'germany' },
    { id: 'munster', name: 'University of Münster', location: 'Münster', ranking: 14, description: 'Large university with diverse programs.', popularPrograms: ['Law', 'Medicine', 'Business'], website: 'https://www.uni-muenster.de', country: 'germany' },
    { id: 'erlangen', name: 'FAU Erlangen-Nürnberg', location: 'Erlangen', ranking: 15, description: 'Strong in engineering and medicine.', popularPrograms: ['Engineering', 'Medicine', 'Business'], website: 'https://www.fau.eu', country: 'germany' },

    // Singapore Universities (15)
    { id: 'nus', name: 'National University of Singapore', location: 'Singapore', ranking: 1, description: "Asia's top university with strong global partnerships.", popularPrograms: ['Business', 'Engineering', 'Computing'], website: 'https://www.nus.edu.sg', country: 'singapore' },
    { id: 'ntu', name: 'Nanyang Technological University', location: 'Singapore', ranking: 2, description: 'Young research university with beautiful campus.', popularPrograms: ['Engineering', 'Business', 'Science'], website: 'https://www.ntu.edu.sg', country: 'singapore' },
    { id: 'smu', name: 'Singapore Management University', location: 'Singapore', ranking: 3, description: 'Specialized in business and management education.', popularPrograms: ['Business', 'Economics', 'Information Systems'], website: 'https://www.smu.edu.sg', country: 'singapore' },
    { id: 'sutd', name: 'Singapore University of Technology and Design', location: 'Singapore', ranking: 4, description: 'Focus on technology and design with MIT collaboration.', popularPrograms: ['Architecture', 'Engineering', 'Design'], website: 'https://www.sutd.edu.sg', country: 'singapore' },
    { id: 'sit', name: 'Singapore Institute of Technology', location: 'Singapore', ranking: 5, description: 'Applied learning with industry partnerships.', popularPrograms: ['Engineering', 'Health Sciences', 'Design'], website: 'https://www.singaporetech.edu.sg', country: 'singapore' },
    { id: 'suss', name: 'Singapore University of Social Sciences', location: 'Singapore', ranking: 6, description: 'Focus on lifelong learning and social sciences.', popularPrograms: ['Social Work', 'Human Resources', 'Psychology'], website: 'https://www.suss.edu.sg', country: 'singapore' },
    { id: 'simm', name: 'Singapore Institute of Management', location: 'Singapore', ranking: 7, description: 'Private education with international partnerships.', popularPrograms: ['Business', 'Communication', 'Psychology'], website: 'https://www.sim.edu.sg', country: 'singapore' },
    { id: 'lasalle', name: 'LASALLE College of the Arts', location: 'Singapore', ranking: 8, description: 'Leading arts institution with creative programs.', popularPrograms: ['Fine Arts', 'Design', 'Performing Arts'], website: 'https://www.lasalle.edu.sg', country: 'singapore' },
    { id: 'nafa', name: 'Nanyang Academy of Fine Arts', location: 'Singapore', ranking: 9, description: 'Established arts institution with diverse programs.', popularPrograms: ['Visual Arts', 'Design', 'Music'], website: 'https://www.nafa.edu.sg', country: 'singapore' },
    { id: 'tp', name: 'Temasek Polytechnic', location: 'Singapore', ranking: 10, description: 'Practical education with industry-relevant programs.', popularPrograms: ['Business', 'Design', 'Engineering'], website: 'https://www.tp.edu.sg', country: 'singapore' },
    { id: 'np', name: 'Ngee Ann Polytechnic', location: 'Singapore', ranking: 11, description: 'Established polytechnic with diverse programs.', popularPrograms: ['Business', 'Engineering', 'Film'], website: 'https://www.np.edu.sg', country: 'singapore' },
    { id: 'sp', name: 'Singapore Polytechnic', location: 'Singapore', ranking: 12, description: 'First polytechnic in Singapore with strong STEM.', popularPrograms: ['Engineering', 'Business', 'Design'], website: 'https://www.sp.edu.sg', country: 'singapore' },
    { id: 'rp', name: 'Republic Polytechnic', location: 'Singapore', ranking: 13, description: 'Problem-based learning approach.', popularPrograms: ['Business', 'Engineering', 'Health Sciences'], website: 'https://www.rp.edu.sg', country: 'singapore' },
    { id: 'nyp', name: 'Nanyang Polytechnic', location: 'Singapore', ranking: 14, description: 'Strong in health sciences and engineering.', popularPrograms: ['Health Sciences', 'Engineering', 'Business'], website: 'https://www.nyp.edu.sg', country: 'singapore' },
    { id: 'ite', name: 'Institute of Technical Education', location: 'Singapore', ranking: 15, description: 'Vocational education provider.', popularPrograms: ['Engineering', 'Business', 'Culinary Arts'], website: 'https://www.ite.edu.sg', country: 'singapore' },

    // New Zealand Universities (15)
    { id: 'auckland', name: 'University of Auckland', location: 'Auckland', ranking: 1, description: "New Zealand's largest university with eight campuses.", popularPrograms: ['Medicine', 'Engineering', 'Arts'], website: 'https://www.auckland.ac.nz', country: 'newzealand' },
    { id: 'otago', name: 'University of Otago', location: 'Dunedin', ranking: 2, description: "New Zealand's oldest university with strong health sciences.", popularPrograms: ['Medicine', 'Dentistry', 'Law'], website: 'https://www.otago.ac.nz', country: 'newzealand' },
    { id: 'victoria', name: 'Victoria University of Wellington', location: 'Wellington', ranking: 3, description: 'Capital city university with strengths in law and humanities.', popularPrograms: ['Law', 'International Relations', 'Design'], website: 'https://www.wgtn.ac.nz', country: 'newzealand' },
    { id: 'canterbury', name: 'University of Canterbury', location: 'Christchurch', ranking: 4, description: 'Strong engineering and science programs in South Island.', popularPrograms: ['Engineering', 'Science', 'Arts'], website: 'https://www.canterbury.ac.nz', country: 'newzealand' },
    { id: 'massey', name: 'Massey University', location: 'Palmerston North', ranking: 5, description: 'Multi-campus university with distance learning options.', popularPrograms: ['Aviation', 'Veterinary Science', 'Business'], website: 'https://www.massey.ac.nz', country: 'newzealand' },
    { id: 'waikato', name: 'University of Waikato', location: 'Hamilton', ranking: 6, description: 'Innovative university with strong Maori and Pacific programs.', popularPrograms: ['Computer Science', 'Law', 'Management'], website: 'https://www.waikato.ac.nz', country: 'newzealand' },
    { id: 'lincoln', name: 'Lincoln University', location: 'Lincoln', ranking: 7, description: 'Specialized in land-based programs and agribusiness.', popularPrograms: ['Agriculture', 'Viticulture', 'Landscape Architecture'], website: 'https://www.lincoln.ac.nz', country: 'newzealand' },
    { id: 'aut', name: 'Auckland University of Technology', location: 'Auckland', ranking: 8, description: 'Modern university with career-focused programs.', popularPrograms: ['Health Sciences', 'Business', 'Computer Science'], website: 'https://www.aut.ac.nz', country: 'newzealand' },
    { id: 'eit', name: 'Eastern Institute of Technology', location: "Hawke's Bay", ranking: 9, description: 'Regional institute with practical, career-oriented education.', popularPrograms: ['Nursing', 'Business', 'Computing'], website: 'https://www.eit.ac.nz', country: 'newzealand' },
    { id: 'weltec', name: 'Wellington Institute of Technology', location: 'Wellington', ranking: 10, description: 'Practical education with strong industry connections.', popularPrograms: ['Engineering', 'Information Technology', 'Health'], website: 'https://www.weltec.ac.nz', country: 'newzealand' },
    { id: 'unitec', name: 'Unitec Institute of Technology', location: 'Auckland', ranking: 11, description: 'Practical education with industry connections.', popularPrograms: ['Architecture', 'Business', 'Engineering'], website: 'https://www.unitec.ac.nz', country: 'newzealand' },
    { id: 'op', name: 'Open Polytechnic', location: 'Wellington', ranking: 12, description: 'Distance learning provider with flexible options.', popularPrograms: ['Business', 'Health', 'Information Technology'], website: 'https://www.openpolytechnic.ac.nz', country: 'newzealand' },
    { id: 'toiohomai', name: 'Toi Ohomai Institute of Technology', location: 'Rotorua', ranking: 13, description: 'Regional institute serving Bay of Plenty.', popularPrograms: ['Business', 'Tourism', 'Health Sciences'], website: 'https://www.toiohomai.ac.nz', country: 'newzealand' },
    { id: 'ara', name: 'Ara Institute of Canterbury', location: 'Christchurch', ranking: 14, description: 'Vocational education provider in South Island.', popularPrograms: ['Engineering', 'Business', 'Health Sciences'], website: 'https://www.ara.ac.nz', country: 'newzealand' },
    { id: 'nmit', name: 'Nelson Marlborough Institute of Technology', location: 'Nelson', ranking: 15, description: 'Regional institute serving top of South Island.', popularPrograms: ['Business', 'Tourism', 'Health Sciences'], website: 'https://www.nmit.ac.nz', country: 'newzealand' },

    // Netherlands Universities (15)
    { id: 'amsterdam', name: 'University of Amsterdam', location: 'Amsterdam', ranking: 1, description: 'Leading comprehensive university with English-taught programs.', popularPrograms: ['Economics', 'Psychology', 'Law'], website: 'https://www.uva.nl', country: 'netherlands' },
    { id: 'delft', name: 'Delft University of Technology', location: 'Delft', ranking: 2, description: 'Oldest and largest Dutch public technical university.', popularPrograms: ['Architecture', 'Engineering', 'Industrial Design'], website: 'https://www.tudelft.nl', country: 'netherlands' },
    { id: 'leiden', name: 'Leiden University', location: 'Leiden', ranking: 3, description: 'Oldest university in the Netherlands with rich history.', popularPrograms: ['Law', 'Archaeology', 'International Relations'], website: 'https://www.universiteitleiden.nl', country: 'netherlands' },
    { id: 'utrecht', name: 'Utrecht University', location: 'Utrecht', ranking: 4, description: 'Comprehensive university with strong research output.', popularPrograms: ['Veterinary Medicine', 'Psychology', 'Economics'], website: 'https://www.uu.nl', country: 'netherlands' },
    { id: 'eindhoven', name: 'Eindhoven University of Technology', location: 'Eindhoven', ranking: 5, description: 'Technical university with strong industry collaborations.', popularPrograms: ['Industrial Design', 'Computer Science', 'Physics'], website: 'https://www.tue.nl', country: 'netherlands' },
    { id: 'groningen', name: 'University of Groningen', location: 'Groningen', ranking: 6, description: 'Comprehensive university in the northern Netherlands.', popularPrograms: ['Medicine', 'Psychology', 'Arts'], website: 'https://www.rug.nl', country: 'netherlands' },
    { id: 'erasmus', name: 'Erasmus University Rotterdam', location: 'Rotterdam', ranking: 7, description: 'Strong in economics, business and medicine.', popularPrograms: ['Business Administration', 'Economics', 'Medicine'], website: 'https://www.eur.nl', country: 'netherlands' },
    { id: 'twente', name: 'University of Twente', location: 'Enschede', ranking: 8, description: 'Entrepreneurial university with campus setting.', popularPrograms: ['Technical Medicine', 'Industrial Engineering', 'Psychology'], website: 'https://www.utwente.nl', country: 'netherlands' },
    { id: 'maastricht', name: 'Maastricht University', location: 'Maastricht', ranking: 9, description: 'Innovative university with problem-based learning approach.', popularPrograms: ['Medicine', 'Psychology', 'European Studies'], website: 'https://www.maastrichtuniversity.nl', country: 'netherlands' },
    { id: 'tilburg', name: 'Tilburg University', location: 'Tilburg', ranking: 10, description: 'Specialized in social and behavioral sciences.', popularPrograms: ['Economics', 'Law', 'Psychology'], website: 'https://www.tilburguniversity.edu', country: 'netherlands' },
    { id: 'vu-amsterdam', name: 'Vrije Universiteit Amsterdam', location: 'Amsterdam', ranking: 11, description: 'Comprehensive university with strong research.', popularPrograms: ['Business', 'Psychology', 'Computer Science'], website: 'https://www.vu.nl', country: 'netherlands' },
    { id: 'wur', name: 'Wageningen University', location: 'Wageningen', ranking: 12, description: 'Specialized in life sciences and agriculture.', popularPrograms: ['Agriculture', 'Food Technology', 'Environmental Sciences'], website: 'https://www.wur.nl', country: 'netherlands' },
    { id: 'radboud', name: 'Radboud University', location: 'Nijmegen', ranking: 13, description: 'Comprehensive university with strong research.', popularPrograms: ['Medicine', 'Law', 'Business'], website: 'https://www.ru.nl', country: 'netherlands' },
    { id: 'fontys', name: 'Fontys University of Applied Sciences', location: 'Eindhoven', ranking: 14, description: 'Practical education with industry focus.', popularPrograms: ['Engineering', 'Business', 'ICT'], website: 'https://fontys.edu', country: 'netherlands' },
    { id: 'hanze', name: 'Hanze University of Applied Sciences', location: 'Groningen', ranking: 15, description: 'Largest applied sciences university in north.', popularPrograms: ['Business', 'Arts', 'Engineering'], website: 'https://www.hanze.nl', country: 'netherlands' },

    // Ireland Universities (15)
    { id: 'trinity', name: 'Trinity College Dublin', location: 'Dublin', ranking: 1, description: "Ireland's oldest university with historic campus in city center.", popularPrograms: ['Computer Science', 'Business', 'Arts'], website: 'https://www.tcd.ie', country: 'ireland' },
    { id: 'ucd', name: 'University College Dublin', location: 'Dublin', ranking: 2, description: "Ireland's largest university with extensive course offerings.", popularPrograms: ['Business', 'Veterinary Medicine', 'Engineering'], website: 'https://www.ucd.ie', country: 'ireland' },
    { id: 'ucc', name: 'University College Cork', location: 'Cork', ranking: 3, description: "Research-led university in Ireland's second city.", popularPrograms: ['Medicine', 'Law', 'Business'], website: 'https://www.ucc.ie', country: 'ireland' },
    { id: 'nuig', name: 'National University of Ireland Galway', location: 'Galway', ranking: 4, description: "University in cultural heart of Ireland's west coast.", popularPrograms: ['Medicine', 'Engineering', 'Arts'], website: 'https://www.nuigalway.ie', country: 'ireland' },
    { id: 'dcu', name: 'Dublin City University', location: 'Dublin', ranking: 5, description: 'Innovative university with strong industry links.', popularPrograms: ['Business', 'Communications', 'Computer Science'], website: 'https://www.dcu.ie', country: 'ireland' },
    { id: 'ul', name: 'University of Limerick', location: 'Limerick', ranking: 6, description: 'Modern campus university with strong co-op programs.', popularPrograms: ['Engineering', 'Business', 'Health Sciences'], website: 'https://www.ul.ie', country: 'ireland' },
    { id: 'mu', name: 'Maynooth University', location: 'Maynooth', ranking: 7, description: "Ireland's fastest growing university with historic roots.", popularPrograms: ['Computer Science', 'Business', 'Arts'], website: 'https://www.maynoothuniversity.ie', country: 'ireland' },
    { id: 'dit', name: 'Technological University Dublin', location: 'Dublin', ranking: 8, description: "Ireland's first technological university.", popularPrograms: ['Engineering', 'Business', 'Computing'], website: 'https://www.tudublin.ie', country: 'ireland' },
    { id: 'atu', name: 'Atlantic Technological University', location: 'Galway', ranking: 9, description: "New university serving Ireland's northwest region.", popularPrograms: ['Business', 'Engineering', 'Nursing'], website: 'https://www.atu.ie', country: 'ireland' },
    { id: 'mtu', name: 'Munster Technological University', location: 'Cork', ranking: 10, description: "Technical university serving Ireland's southwest.", popularPrograms: ['Engineering', 'Business', 'Computing'], website: 'https://www.mtu.ie', country: 'ireland' },
    { id: 'tus', name: 'Technological University of the Shannon', location: 'Athlone', ranking: 11, description: 'New technological university in midlands.', popularPrograms: ['Engineering', 'Business', 'Science'], website: 'https://www.tus.ie', country: 'ireland' },
    { id: 'dkit', name: 'Dundalk Institute of Technology', location: 'Dundalk', ranking: 12, description: 'Institute of technology in northeast.', popularPrograms: ['Business', 'Engineering', 'Computing'], website: 'https://www.dkit.ie', country: 'ireland' },
    { id: 'itcarlow', name: 'Institute of Technology Carlow', location: 'Carlow', ranking: 13, description: 'Institute with strong industry links.', popularPrograms: ['Business', 'Engineering', 'Computing'], website: 'https://www.itcarlow.ie', country: 'ireland' },
    { id: 'wit', name: 'Waterford Institute of Technology', location: 'Waterford', ranking: 14, description: 'Institute in southeast Ireland.', popularPrograms: ['Business', 'Engineering', 'Health Sciences'], website: 'https://www.wit.ie', country: 'ireland' },
    { id: 'lyit', name: 'Letterkenny Institute of Technology', location: 'Letterkenny', ranking: 15, description: 'Institute serving northwest region.', popularPrograms: ['Business', 'Computing', 'Engineering'], website: 'https://www.lyit.ie', country: 'ireland' },
  ];

  const filteredUniversities = allUniversities
    .filter(uni => uni.country === selectedCountry)
    .filter(uni => uni.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      return a.ranking - b.ranking;
    });

  const currentCountry = countries.find(c => c.id === selectedCountry);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3 py-12">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Dream University</h1>
          <p className="mt-2 text-lg text-gray-600">Explore top universities around the world</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full md:w-48 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.flag} {country.label}
                </option>
              ))}
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'alphabetical' | 'ranking')}
              className="w-full md:w-48 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ranking">Sort by Ranking</option>
              <option value="alphabetical">Sort A-Z</option>
            </select>
          </div>
        </div>

        {/* University Results */}
        {filteredUniversities.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredUniversities.map((uni) => (
              <div key={uni.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{uni.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {uni.location}
                  </div>
                </div>
                <div className="bg-indigo-600 text-white inline-block px-2 py-1 rounded-full text-xs mt-2">#{uni.ranking}</div>
                <p className="mt-2 text-gray-600 text-sm">{uni.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {uni.popularPrograms.slice(0, 3).map((program, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                      {program}
                    </span>
                  ))}
                </div>
                <a
                  href={uni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-gray-600 mb-4">No universities found matching your search. Try adjusting your search or filters.</p>
            <a
              href={currentCountry?.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Explore more universities in {currentCountry?.label} on Wikipedia
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversitySearch;