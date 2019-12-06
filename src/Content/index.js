import React from 'react'

class ContentArea extends React.Component {

    render=()=> {
        return (
            <div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div className="card">
									<div className="card-header">
										<h5 className="card-title">Complete Report</h5>
										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus"></i>
											</button>
											<div className="btn-group">
												<button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
													<i className="fas fa-wrench"></i>
												</button>
												<div className="dropdown-menu dropdown-menu-right" role="menu">
													<a href="#" className="dropdown-item">Action</a>
													<a href="#" className="dropdown-item">Another action</a>
													<a href="#" className="dropdown-item">Something else here</a>
													<a className="dropdown-divider"></a>
													<a href="#" className="dropdown-item">Separated link</a>
												</div>
											</div>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times"></i>
											</button>
										</div>
									</div>
									<div className="card-body">
										<div className="row">
											
											<div className="col-md-6">
												
												<div className="progress-group">
                      Shipped
                      
													<span className="float-right">
														<b>160</b>/200
													</span>
													<div className="progress progress-sm">
														<div className="progress-bar bg-primary" style={{width:"80%"}}></div>
													</div>
												</div>
												<div className="progress-group">
                      Pending
                      
													<span className="float-right">
														<b>310</b>/400
													</span>
													<div className="progress progress-sm">
														<div className="progress-bar bg-danger" style={{width:"75%"}}></div>
													</div>
												</div>
											</div>
										
											<div className="col-md-6">
												<div className="progress-group">
													<span className="progress-text">Delivered</span>
													<span className="float-right">
														<b>480</b>/800
													</span>
													<div className="progress progress-sm">
														<div className="progress-bar bg-success" style={{width:"60%"}}></div>
													</div>
												</div>
												<div className="progress-group">
                      In Talks
                      
													<span className="float-right">
														<b>250</b>/500
													</span>
													<div className="progress progress-sm">
														<div className="progress-bar bg-warning" style={{width:"50%"}}></div>
													</div>
												</div>
											</div>
											
											
											
										</div>
									</div>
									<div className="card-footer">
										<div className="row">
											<div className="col-sm-3 col-6">
												<div className="description-block border-right">
													<span className="description-percentage text-success">
														<i className="fas fa-caret-up"></i> 17%
													</span>
													<h5 className="description-header">$35,210.43</h5>
													<span className="description-text">TOTAL REVENUE</span>
												</div>
											</div>
											<div className="col-sm-3 col-6">
												<div className="description-block border-right">
													<span className="description-percentage text-warning">
														<i className="fas fa-caret-left"></i> 0%
													</span>
													<h5 className="description-header">$10,390.90</h5>
													<span className="description-text">TOTAL COST</span>
												</div>
											</div>
											<div className="col-sm-3 col-6">
												<div className="description-block border-right">
													<span className="description-percentage text-success">
														<i className="fas fa-caret-up"></i> 20%
													</span>
													<h5 className="description-header">$24,813.53</h5>
													<span className="description-text">TOTAL PROFIT</span>
												</div>
											</div>
											<div className="col-sm-3 col-6">
												<div className="description-block">
													<span className="description-percentage text-danger">
														<i className="fas fa-caret-down"></i> 18%
													</span>
													<h5 className="description-header">1200</h5>
													<span className="description-text">GOAL COMPLETIONS</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-8">
								<div className="card">
									<div className="card-header border-transparent">
										<h3 className="card-title">Latest Orders</h3>
										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus"></i>
											</button>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times"></i>
											</button>
										</div>
									</div>
									<div className="card-body p-0">
										<div className="table-responsive">
											<table className="table m-0">
												<thead>
													<tr>
														<th>Order ID</th>
														<th>Item</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<a href="./../pages/examples/invoice.html">OR9842</a>
														</td>
														<td>Gypsum-Stones</td>
														<td>
															<span className="badge badge-success">Shipped</span>
														</td>
													</tr>
													<tr>
														<td>
															<a href="./../pages/examples/invoice.html">OR1848</a>
														</td>
														<td>Gypsum-powder</td>
														<td>
															<span className="badge badge-warning">Pending</span>
														</td>
													</tr>
													<tr>
														<td>
															<a href="./../pages/examples/invoice.html">OR7429</a>
														</td>
														<td>Magnesite</td>
														<td>
															<span className="badge badge-danger">Delivered</span>
														</td>
													</tr>
													
												</tbody>
											</table>
										</div>
									</div>
									<div className="card-footer clearfix">
										<a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
										<a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Recently Added Orders</h3>
										<div className="card-tools">
											<button type="button" className="btn btn-tool" data-card-widget="collapse">
												<i className="fas fa-minus"></i>
											</button>
											<button type="button" className="btn btn-tool" data-card-widget="remove">
												<i className="fas fa-times"></i>
											</button>
										</div>
									</div>
									<div className="card-body p-0">
										<ul className="products-list product-list-in-card pl-2 pr-2">
											<li className="item">
												<div className="product-img">
													<img src="./../dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
												</div>
												<div className="product-info">
													<a href="javascript:void(0)" className="product-title">Gypsum-powder
														<span className="badge badge-warning float-right">$1800</span>
													</a>
													<span className="product-description">Alteck - mumbai</span>
												</div>
											</li>
											<li className="item">
												<div className="product-img">
													<img src="./../dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
												</div>
												<div className="product-info">
													<a href="javascript:void(0)" className="product-title">Gypsum-Stones
														<span className="badge badge-info float-right">$700</span>
													</a>
													<span className="product-description">Navi Port Mumbai</span>
												</div>
											</li>
										</ul>
									</div>
									<div className="card-footer text-center">
										<a href="javascript:void(0)" className="uppercase">View All Orders</a>
									</div>
								</div>
							</div>
						</div>
					</div>
        )
    }
}

export default ContentArea