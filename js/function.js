function select()
{
    if(document.getElementById('hiring').checked)
    {
        document.getElementById('hr').style.display = "block";
    }
    else
    {
        document.getElementById('hr').style.display = "none";
    }
    return;
}
