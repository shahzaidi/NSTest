class ApiFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
     
    
    search(){
        const keyword = this.queryStr.keyword ? {title:{$regex: this.queryStr.keyword, $options: "i"}} : {};

        this.query = this.query.find({...keyword});

        return this;
      }


      filter() {
        const queryCopy = { ...this.queryStr };
        // console.log(queryCopy, "q1");
        // Removing some fields for category
    
        const removeFields = ["keyword", "page", "limit"];
    
        removeFields.forEach((key) => delete queryCopy[key]);
    
        // Filter for Price
    
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        queryStr = JSON.parse(queryStr);
    
        console.log(queryStr, "q2");
        this.query = this.query.find(queryStr);
        return this;
      }


      // Pagination 

      pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
    
        const skip = resultPerPage * (currentPage - 1);
    
        this.query = this.query.limit(resultPerPage).skip(skip);
    
        return this;
      }
    
}


module.exports = ApiFeatures