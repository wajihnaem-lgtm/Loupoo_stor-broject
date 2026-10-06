<<<<<<< HEAD
#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Product {
    string name;
    string category;
    double price;
};

void bubbleSort(vector<Product>& products) {
    int n = products.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (products[j].price > products[j + 1].price) {
                // Swap
                Product temp = products[j];
                products[j] = products[j + 1];
                products[j + 1] = temp;
            }
        }
    }
}

int binarySearch(vector<Product>& sortedProducts, double targetPrice) {
    int low = 0;
    int high = sortedProducts.size() - 1;

    while (low <= high) {
        int mid = (low + high) / 2;

        if (sortedProducts[mid].price == targetPrice) {
            return mid;
        } else if (sortedProducts[mid].price < targetPrice) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; 
}

int main() {
    vector<Product> products = {
        {"Meraya fahs asnan", "fahs", 45},
        {"Malqat garahy", "garaha", 120},
        {"Gahaz taqim sagheer", "taqim", 850},
        {"Adasa mokabbara", "mo'edat fahs", 11000}
    };

    cout << "Before sorting:" << endl;
    for (int i = 0; i < products.size(); i++) {
        cout << products[i].name << " - " << products[i].price << endl;
    }

    bubbleSort(products);

    cout << "\nAfter sorting by price:" << endl;
    for (int i = 0; i < products.size(); i++) {
        cout << products[i].name << " - " << products[i].price << endl;
    }

    double searchPrice = 850;
    int result = binarySearch(products, searchPrice);

    if (result != -1) {
        cout << "\nFound product with price " << searchPrice << ": " << products[result].name << endl;
    } else {
        cout << "\nNo product with this price." << endl;
    }

    return 0;
=======
#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Product {
    string name;
    string category;
    double price;
};

void bubbleSort(vector<Product>& products) {
    int n = products.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (products[j].price > products[j + 1].price) {
                // Swap
                Product temp = products[j];
                products[j] = products[j + 1];
                products[j + 1] = temp;
            }
        }
    }
}

int binarySearch(vector<Product>& sortedProducts, double targetPrice) {
    int low = 0;
    int high = sortedProducts.size() - 1;

    while (low <= high) {
        int mid = (low + high) / 2;

        if (sortedProducts[mid].price == targetPrice) {
            return mid;
        } else if (sortedProducts[mid].price < targetPrice) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; 
}

int main() {
    vector<Product> products = {
        {"Meraya fahs asnan", "fahs", 45},
        {"Malqat garahy", "garaha", 120},
        {"Gahaz taqim sagheer", "taqim", 850},
        {"Adasa mokabbara", "mo'edat fahs", 11000}
    };

    cout << "Before sorting:" << endl;
    for (int i = 0; i < products.size(); i++) {
        cout << products[i].name << " - " << products[i].price << endl;
    }

    bubbleSort(products);

    cout << "\nAfter sorting by price:" << endl;
    for (int i = 0; i < products.size(); i++) {
        cout << products[i].name << " - " << products[i].price << endl;
    }

    double searchPrice = 850;
    int result = binarySearch(products, searchPrice);

    if (result != -1) {
        cout << "\nFound product with price " << searchPrice << ": " << products[result].name << endl;
    } else {
        cout << "\nNo product with this price." << endl;
    }

    return 0;
>>>>>>> 12b5e82367390f20c32f5fda317b8868384c10a3
}