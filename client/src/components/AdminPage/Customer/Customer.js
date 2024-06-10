import React from 'react'

export const Customer = () => {
  return (
    <div><div className="all flex justify-center" >
    <div />
    <div className="wrapper-table-list-customer">
      <h2>Bảng nhân viên</h2>
      <div if="message">
        <p style={{color: 'red'}}>message</p>
      </div>
      <table className="table table-hover w-4/5">
        <thead style={{backgroundColor: '#353a40', color: '#ccc'}}>
          <tr>
            <th>id</th>
            <th>Tên</th>
            <th>Email</th>
            <th>SDT</th>
            <th>Địa chỉ</th>
            <th />
          </tr>
        </thead>
        <tbody><tr>						
            <td>id</td>
            <td>nameemployee</td>
            <td>email</td>
            <td>employee</td>
            <td>address</td>
            <td>
              <a href="#">
                <i className="fa-solid fa-circle-info" style={{color: '#1e3050'}} />
              </a>
              <a href="#">
                <i className="fa-solid fa-trash" style={{color: '#1e3050'}} />
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={6}><a style={{color: '#212529'}} href="#"><i tclass="fa-solid fa-plus" style={{color: '#1e3050', marginRight: '5px'}} />Thêm nhân viên</a></td>
          </tr>
        </tbody></table>
    </div>
  </div></div>
  )
}
