import React,{Component} from "react";
import { variables } from "../../Variables";


export class Employee extends Component{


    constructor(props){
        super(props);
        this.state = {
            Employees:[],
            modalTitle:"",
            EmployeeName:"",
            EmployeeID:0,
            EmployeeAge:"",
            EmployeeDepartment:"",
            EmployeeStartDate:"",
            PhotofileName:variables.PHOTO_URL
        }
    };

    
    
    
    refreshList(){
        fetch(variables.API_URL+'employee',{mode:'cors'})
        .then(response=>response.json())
        .then(data=>{
            this.setState({Employees:data});
        });

        fetch(variables.API_URL+'department',{mode:'cors'})
        .then(response=>response.json())
        .then(data=>{
            this.setState({EmployeeDepartment:data.DepartmentName});
        });
    }

    createClick(){
        fetch(variables.API_URL+'employee',{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeID:this.state.EmployeeID,
                EmployeeName:this.state.EmployeeName,
                EmployeeAge:this.state.EmployeeAge,
                EmployeeDepartment:this.state.EmployeeDepartment,
                EmployeeStartDate :this.state.EmployeeStartDate,
                PhotofileName : this.state.PhotofileName
            })
        })
        .then(res => res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('failed');
        })
    }

    updateClick(){
        fetch(variables.API_URL+'employee',{
            method:'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeID:this.state.EmployeeID,
                EmployeeName:this.state.EmployeeName,
                EmployeeAge:this.state.EmployeeAge,
                EmployeeDepartment:this.state.EmployeeDepartment,
                EmployeeStartDate :this.state.EmployeeStartDate,
                PhotofileName : this.state.PhotofileName
            })
        })
        .then(res => res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('failed');
        })
    }

    deleteClick(id){
        if(window.confirm('are you sure you want to delete?')){
        fetch(variables.API_URL+'employee/'+id,{
            method:'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('failed');
        })}
    }

    addClick(){
        this.setState({
        modalTitle:"Add Employee",
        EmployeeID:0,
        EmployeeName:""
        });
    }



    editClick(dep){
        this.setState({
            modalTitle:"Edit Employee",
        EmployeeID:dep.EmployeeID,
        EmployeeName:dep.EmployeeName,
        EmployeeAge:dep.EmployeeAge,
        EmployeeDepartment:dep.EmployeeDepartment,
        EmployeeStartDate:dep.EmployeeStartDate,
        PhotofileName:dep.PhotofileName
        });
    }

    changeEmployeeName = (e) =>{
        this.setState({EmployeeName:e.target.value});
    }
    changeEmployeeAge = (e) =>{
        this.setState({EmployeeAge:e.target.value});
    }
    changeEmployeeDepartment = (e) =>{
        this.setState({EmployeeDepartment:e.target.value});
    }
    changeEmployeeStartDate = (e) =>{
        this.setState({EmployeeStartDate:e.target.value});
    }
    changeEmployeePhoto = (e) =>{
        this.setState({PhotofileName:e.target.value});
    }
    componentDidMount(){
        this.refreshList();
    }


    render(){
        const{
            Employees,
            modalTitle,
            EmployeeAge,
            EmployeeDepartment,
            EmployeeName,
            EmployeeID,
            EmployeeStartDate,
            PhotofileName
        } = this.state;
        return(
            <div>
                <button type="button" className="btn btn-primary m-2 float-end"  data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={()=>this.addClick()}>
                Add Employee
                </button>
               <table className="table table-striped">
                   <thead>
                       <tr>
                           <th>
                                Employee ID
                           </th>
                           <th>
                                Employee Name
                           </th>
                           <th>
                                Employee Department
                           </th>
                           <th>
                                Employee Age
                           </th>
                           <th>
                                Employee StartDate
                           </th>
                           <th>
                                Options
                           </th>
                       </tr>
                   </thead>
                   <tbody>
                       {Employees.map(dep=>
                        <tr key={dep.EmployeeID}>
                                <td>{dep.EmployeeID}</td>
                                <td>{dep.EmployeeName}</td>
                                <td>{dep.EmployeeDepartment}</td>
                                <td>{dep.EmployeeAge}</td>
                                <td>{dep.EmployeeStartDate}</td>
                               
                                
                                
                                
                                <td>
                                    <button type="button" className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={()=>this.editClick(dep)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" className="btn btn-light mr-1"  onClick={() => this.deleteClick(dep.EmployeeID)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16" >
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                        </svg>
                                    </button>
                                </td>
                        </tr>)
                        }
                   </tbody>
               </table>

               <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true" aria-labelledby="exampleModalLabel">
                   <div className="modal-dialog modal-lg modal-dialog-centered">
                       <div className="modal-content">
                           <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                                </button>
                           </div>
                           <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Employee Name</span>
                                    <input type="text" className="form-control" value={EmployeeName} onChange={this.changeEmployeeName} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Employee Age</span>
                                    <input type="text" className="form-control" value={EmployeeAge} onChange={this.changeEmployeeAge} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Employee Department</span>
                                    <input type="dropdown" className="form-control" value={EmployeeDepartment} onChange={this.changeEmployeeDepartment} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Employee Start date</span>
                                    <input type="text" className="form-control" value={EmployeeStartDate} onChange={this.changeEmployeeStartDate} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Employee Photo</span>
                                    <input type="text" className="form-control" value={PhotofileName} onChange={this.changeEmployeePhoto} />
                                </div>
                                {EmployeeID==0?
                                <button type="button" 
                                className="btn btn-primary float-start"
                                onClick={()=>this.createClick()}
                                >
                                    Create</button>
                                    :null}

                                {EmployeeID!=0?
                                <button type="button" 
                                className="btn btn-primary float"
                                onClick={()=>this.updateClick()}
                                >
                                    Update Employee</button>
                                    :null}
                           </div>

                       </div>

                   </div>

               </div>
            </div>
        )
    }
}