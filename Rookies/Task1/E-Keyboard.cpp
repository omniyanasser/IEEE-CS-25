#include <iostream>
#include<string>

using namespace std;

int main()
{
    char direction;
    string message ;

    cin>>direction;
    cin>>message;

    string characters = "qwertyuiopasdfghjkl;zxcvbnm,./";
    string originalMessage ="";

    for(char c : message){
        int index = characters.find(c);

        if(direction == 'R'){
            originalMessage += characters[index -1];
        }
        else{
            originalMessage += characters[index +1];
        }
    }

    cout<<originalMessage<<endl;

    return 0;
}
