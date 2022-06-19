const { response } = require("express");
const { get } = require("express/lib/response");
const { statuses } = require("./../models");
const db = require("./../models");
//*****************************Create stsatuse*****************************
//**********************************************************************

const craeteStatus = async (req, res) => {
 
  const body = req.body;
  const status = new db.statuses({
    status: body.status,
    bookMatch: body.bookMatch,
  });
  console.log(statuses);
  const response = await status.save();
  res.status(200).send({message:'create success ', statusCode: 200});
};


//*****************************Get stsatuse*****************************
//**********************************************************************

const getStatus = async (req, res) => {
  //get
  const status = req.query.status;
  const page = req.query.page;
  let pages;
  let nextPage = null;
  let prevPage = null;
  let limit = 10;
  //cost
  //check condition to protect ERrr
  if (req.query.limit <= 0 || page <= 0) {
    return res
      .status(400)
      .send({ message: " bad request or limit >0", statusCode: 400 });
  }

  if (Boolean(req.query.limit)) {
    limit = req.query.limit;
  }

  try {
    //count all document is collection statuses
    const total = await db.statuses.find().count();
    //find page
    if (total % limit == 0) {
      pages = total / limit;
    } else {
      pages = parseInt(total / limit) + 1;
    }

    //when request as search by status

    if (status) {
      const statuses = await db.statuses.find({
        status: { $regex: status, $options: "i" },
      });
      res
        .status(200)
        .send({ data: statuses, count: statuses.length, total: total });
      //get all doc
    }

    /**1page :limite :10
     * 10 : page :3(limit) partem (page-1)*2
     * page:skip 0
     * page2:skip2
     * page:skip 4
     */
    //1pag
    else if (page) {
      console.log(pages);
      const statuses = await db.statuses
        .find()
        .skip((page - 1) * limit)
        .limit(limit);

      //prevPage
      if (page != 1) {
        prevPage = `http://localhost: ${process.env.port}/api/v1/status?page=${
          Number(page) - 1
        }&limit=${limit}`;
      }
      //find nextPage
      if (page < pages) {
        nextPage = `http://localhost: ${process.env.port}/api/v1/status?page=${
          Number(page) + 1
        }&limit=${limit}`;
      }
      res.status(200).send({
        data: statuses,
        count: statuses.length,
        total: total,
        pages: pages,
        firtPage: `http://localhost: ${process.env.port}/api/v1/status?page=1&limit=${limit}`,
        prevPage: prevPage,
        nextPage: nextPage,
        lastPage: `http://localhost: ${process.env.port}/api/v1/status?page=${pages}&limit=${limit}`,
        correntPage: `http://localhost: ${process.env.port}/api/v1/status?page=${page}&limit=${limit}`,
      });
    } else {
      const status = await db.statuses.find();
      res
        .status(200)
        .send({ data: status, count: status.length, total: total });
    }
  } catch (error) {
    res.status(500).send({ statusCode: 500, message: error });
  }
};

//*****************************update stsatuse*****************************
//**********************************************************************

const updateStatus = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const body = req.body;
  try {
    const response = await db.statuses.findByIdAndUpdate(id, body);
    return res.status(200).send({data: response,message: `Update id:${id}`,statusCode: 200,});
  } catch (error) {
    res.status(500).send({
      error: error,
      statusCode: 500,
    });
  }
};
//*****************************delete stsatuse*****************************
//**********************************************************************
const deleteStatus = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await db.statuses.findByIdAndDelete({_id:id});

    //no id record
    if (!response)
      return res.status(404).send({
        message: `not found with id:${id}`,
        statusCode: 404,
      });

    //id is exist in db
    return res.status(200).send({
      data: response,
      message: `delete id:${id}`,
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      statusCode: 500,
    });
  }
};

module.exports = {
  craeteStatus,
  getStatus,
  updateStatus,
  deleteStatus,
};
