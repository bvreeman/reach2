import React from "react";
import './MessagaeComponent.css';

{/* <div class="row">
<div class="col s12">
    <div class="card-panel">
        <h5 class="center-align">Compose Message</h5>
        <form>
            <div class="row">
                <div id="errorDiv" style="color: red"></div>
                <div class="input-field col s12">
                    <input id="phone" type="tel" class="validate">
                    <label for="phone">US Phone Number (ex: 123456789)</label>
                </div> 
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="message" class="materialize-textarea" data-length="255"></textarea>
                    <label for="text">Text Message Body</label>
                </div>
            </div>

            <div class="row">
                <div class="col s6 m9">
                    <h6>Schedule Outgoing Date:</h6>
                </div>
                {{!-- <div class="col s6 m3">
                    <button class="btn waves-effect waves-light pink darken-1 formBtn" id="datePicker"><i class="fas fa-calendar-alt"></i> Select Date</button>
                </div> --}}
            </div>

            <div class="row">
                <div class="col s4 m3">
                    <label>Year</label>
                    <select id="selectedYear" class="browser-default dateInputs select-text">
                        <option disabled value="" id="defaultYear" selected>YYYY</option>
                        {{!-- jQuery year options append here --}}
                    </select>
                </div>
                <div class="col s4 m3">
                    <label>Month</label>
                    <select id="selectedMonth" class="browser-default dateInputs">
                        <option disabled value="" id="defaultMonth" selected>MM</option>
                            {{!-- jQuery month options append here --}}
                    </select>
                </div>
                <div class="col s4 m3">
                    <label>Day</label>
                    <select id="selectedDay" class="browser-default dateInputs">
                        <option disabled value="" id="defaultDay" selected>DD</option>
                            {{!-- jQuery day options append here --}}
                    </select>
                </div>
                <div class="col s6 m3">
                    <button class="btn waves-effect waves-light pink darken-1 formBtn" id="datePicker" type="button"><i class="fas fa-calendar-alt"></i> Select Date</button>
                </div>
            </div>  

            <div class="row">
                <div class="col s6 m9">
                    <h6>Schedule Outgoing Time:</h6>
                </div>
                {{!-- <div class="col s6 m3">
                    <button class="btn waves-effect waves-light pink darken-1 formBtn" id="timePicker"><i class="far fa-clock"></i> Select Time</button>
                </div> --}}
            </div>
            
            <div class="row">
                <div class="col s4 m3">
                    <label>Hour</label>
                    <select id="selectedHour" class="browser-default timeInputs">
                        <option disabled value="" id="defaultHour" selected></option>
                            {{!-- jQuery hour options append here --}}
                    </select>
                </div>
                <div class="col s4 m3">
                    <label>Minute</label>
                    <select id="selectedMinute" class="browser-default timeInputs">
                        <option disabled value="" id="defaultMinute" selected></option>
                            {{!-- jQuery minute options append here --}}
                    </select>
                </div>
                <div class="col s4 m3">
                    <label>AM/PM</label>
                    <select id="selectedAMPM" class="browser-default timeInputs">
                        <option disabled value="" id="defaultAMPM" selected></option>
                            {{!-- jQuery AM/PM options append here --}}
                    </select>
                </div>
                <div class="col s6 m3">
                    <button class="btn waves-effect waves-light pink darken-1 formBtn" id="timePicker" type="button"><i class="far fa-clock"></i> Select Time</button>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m3">
                    <button class="right-align btn-large waves-effect waves-light pink darken-1 modal-trigger" id="submit" type="submit" name="action" data-target="confirmModal">Save</button>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
<div id="confirmModal" class="modal">
<div class="modal-content">
    <h4><i class="fas fa-check-circle"></i> Message Saved!</h4>
    <p>Would you like to write a new message or view your saved messages in your pending outbox?</p>
</div>
<div class="modal-footer">
    <a href="/" class="modal-close waves-effect waves-green btn-flat">Compose New Message</a>
    <a href="/outbox" class="modal-close waves-effect waves-green btn-flat">Pending Outbox</a>
</div>
</div> */}