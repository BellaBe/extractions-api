
export class ExtractionService {

    data = "../data/extraction-data.json";

    async calculateStringSimilarity(str1, str2) {
        return Math.min(str1.length, str2.length) / Math.max(str1.
            length, str2.length);
    };
}